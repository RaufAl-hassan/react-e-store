import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "./Button";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  img {
    display: block;
    margin: 0 auto;
    width: 200px;
  }
`;

export default class Modal extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { modalVisibility, toggleModalVisibility } = value;
          const { img, price, title } = value.detailProduct;
          if (modalVisibility)
            return (
              <ModalWrapper className="row align-items-center">
                <div
                  className="card col-6 col-md-4 mx-auto p-2 text-center"
                  onMouseLeave={() => {
                    toggleModalVisibility();
                  }}
                >
                  <h4>Item Added To Cart</h4>
                  <div className="p-3">
                    <img className="img-fluid" src={img} alt="" />
                  </div>
                  <h3 className="h5">{title}</h3>
                  <p className="text-muted h5">Price: ${price}</p>
                  <Link
                    to="/"
                    className="mb-1"
                    onClick={() => {
                      toggleModalVisibility();
                    }}
                  >
                    <Button>Go to Products</Button>
                  </Link>
                  <Link
                    to="/cart"
                    className="mb-1"
                    onClick={() => {
                      toggleModalVisibility();
                    }}
                  >
                    <Button cart>Go to Cart</Button>
                  </Link>
                </div>
              </ModalWrapper>
            );
        }}
      </Consumer>
    );
  }
}
