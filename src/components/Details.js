import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import { Button } from "./Button";

export default function Details(props) {
  return (
    <Consumer>
      {(value) => {
        const {
          id,
          title,
          img,
          company,
          price,
          info,
          inCart,
        } = value.detailProduct;
        const { addToCart, toggleModalVisibility } = value;

        return (
          <div className="row">
            <h2 className="col-12 text-center mb-3">{title}</h2>
            <div className="col-10 mx-auto col-md-6">
              <img src={img} alt="" />
            </div>
            <div className="col-10 mx-auto col-md-6 mb-3">
              <h2>Model: {title}</h2>
              <h3 className="text-muted font-italic">Made By: {company}</h3>
              <h4 className="text-main">Price: ${price}</h4>
              <h6>Some Info About Product</h6>
              <p className="lead text-muted">{info}</p>
              <div>
                <Link to="/">
                  <Button>Back To Products</Button>
                </Link>
                <Button
                  onClick={() => {
                    addToCart(id);
                    toggleModalVisibility();
                  }}
                  cart
                  disabled={inCart ? true : false}
                >
                  {inCart ? "In Cart" : "Add To Cart"}
                </Button>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
