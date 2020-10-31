import React, { Component } from "react";
import { Consumer } from "../../context";

import Product from "./ProductList";

export default class Products extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { storeProducts } = value;
          return (
            <section className="py-5">
              <h1 className="text-center font-italic">
                OUR <span className="text-main">PRODUCTS</span>
              </h1>
              <div className="row">
                {storeProducts.map((product) => (
                  <Product key={product.id} product={product} value={value} />
                ))}
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}
