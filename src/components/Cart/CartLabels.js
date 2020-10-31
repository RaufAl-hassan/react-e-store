import React from "react";

export default function CartLabels() {
  return (
    <div>
      <h2 className="font-italic text-center">
        Your <span className="text-main">Cart</span>
      </h2>
      <div className="row">
        <div className="col-2 d-none d-lg-block text-center">
          <h6>Products</h6>
        </div>
        <div className="col-2 d-none d-lg-block text-center">
          <h6>Name Of Product</h6>
        </div>
        <div className="col-2 d-none d-lg-block text-center">
          <h6>Price</h6>
        </div>
        <div className="col-2 d-none d-lg-block text-center">
          <h6>Quatity</h6>
        </div>
        <div className="col-2 d-none d-lg-block text-center">
          <h6>Remove</h6>
        </div>
        <div className="col-2 d-none d-lg-block text-center">
          <h6>Total</h6>
        </div>
      </div>
    </div>
  );
}
