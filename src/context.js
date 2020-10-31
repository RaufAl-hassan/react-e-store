import React, { Component } from "react";

import { storeProducts, detailProduct } from "./data";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    storeProducts,
    detailProduct,
    modalVisibility: false,
    cart: [],
    subTotal: 0,
    tax: 0,
    total: 0,
  };

  componentDidMount() {
    this.setdefaultProducts();
  }

  setdefaultProducts = () => {
    let tempProduct = [];
    storeProducts.forEach((product) => {
      const item = { ...product };
      tempProduct = [...tempProduct, item];
    });

    this.setState({ storeProducts: tempProduct });
  };

  toggleModalVisibility = () => {
    this.setState((state) => {
      return { modalVisibility: !state.modalVisibility };
    });
  };

  getItem = (id) =>
    this.state.storeProducts.find((product) => {
      return product.id === id;
    });

  addToCart = (id) => {
    const tempProducts = [...this.state.storeProducts];
    const product = tempProducts.find((product) => product.id === id);
    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState(
      {
        cart: [product, ...this.state.cart],
        storeProducts: tempProducts,
      },
      () => {
        this.handleTotal();
      }
    );
  };

  handleDetails = (id) => {
    const { storeProducts } = this.state;

    const product = storeProducts.find((product) => {
      return product.id === id;
    });

    this.setState({ detailProduct: product });
  };

  removeProduct = (id) => {
    const tempProducts = [...this.state.storeProducts];
    let item = tempProducts.find((item) => item.id === id);

    if (item) {
      item.count = 0;
      item.inCart = false;
    }

    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    this.setState(
      {
        storeProducts: tempProducts,
        cart: tempCart,
      },
      () => {
        this.handleTotal();
      }
    );
  };

  increaseCount = (id, limit = 9) => {
    const tempCart = [...this.state.cart];
    const item = tempCart.find((item) => item.id === id);

    if (item && item.count <= limit) {
      item.count++;
      item.total = item.count * item.price;
    }
    this.handleTotal();

    this.setState({ cart: tempCart });
  };

  decreaseCount = (id) => {
    const tempCart = [...this.state.cart];
    const item = tempCart.find((item) => item.id === id);

    if (item && item.count) {
      item.count--;
      item.total = item.count * item.price;
    }

    this.handleTotal();

    if (!item.count) return this.removeProduct(id);

    this.setState({ cart: tempCart });
  };

  handleTotal = () => {
    const tempCart = [...this.state.cart];
    const itemsTotalArr = tempCart.map((item) => item.total);

    const subTotal = itemsTotalArr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    const tax = itemsTotalArr.reduce((acc, cur) => {
      return parseFloat((acc + cur * 0.02).toFixed(2));
    }, 0);
    const total = subTotal + tax;

    this.setState({ subTotal, tax, total });
  };

  handleClearList = () => {
    this.setState({ cart: [] }, () => {
      this.setdefaultProducts();
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          toggleModalVisibility: this.toggleModalVisibility,
          addToCart: this.addToCart,
          handleDetails: this.handleDetails,
          increaseCount: this.increaseCount,
          decreaseCount: this.decreaseCount,
          removeProduct: this.removeProduct,
          handleClearList: this.handleClearList,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
