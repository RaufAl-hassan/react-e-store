import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductWrapper = styled.div`
  .cart-btn {
    border: none;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 5px 0 0 0;
    background: var(--lightBlueColor);
    color: #fff;
    transition: all 0.5s linear;
    transform: translateX(100%);
    opacity: 0;
  }

  .img-container {
    position: relative;
  }

  .img-container:hover > .cart-btn {
    transform: translateX(0);
    opacity: 1;
  }
`;

export default class Product extends Component {
  render() {
    const { id, img, title, price, inCart } = this.props.product;
    const {
      toggleModalVisibility,
      addToCart,
      handleDetails,
    } = this.props.value;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-2">
        <div className="card">
          <div className="img-container p-5">
            <Link
              to="/details"
              onClick={() => {
                handleDetails(id);
              }}
            >
              <img className="img-fluid" src={`${img}`} alt="" />
            </Link>
            <button
              className="cart-btn"
              onClick={() => {
                toggleModalVisibility();
                addToCart(id);
                handleDetails(id);
              }}
              disabled={inCart ? true : false}
            >
              {inCart ? "In Cart" : <i className="fa fa-cart-arrow-down"></i>}
            </button>
          </div>
          <div className="card-footer">
            <Link to="/details" className="d-flex justify-content-between">
              <h5 className="h6">{title}</h5>
              <p>$ {price}</p>
            </Link>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
