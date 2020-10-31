import React from "react";

export default function CartList(props) {
  const { id, title, price, total, img, count } = props.product;
  const { increaseCount, decreaseCount, removeProduct } = props.value;

  return (
    <div className="row">
      <div className="col-10 mx-auto col-lg-2 d-lg-block text-center justify-content-center align-items-center mb-sm-2">
        <img
          className="img-fluid"
          src={img}
          alt=""
          style={{ hieght: "5rem", width: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 d-lg-block text-center justify-content-center align-items-center">
        <h5>{title}</h5>
      </div>
      <div
        className="col-10 mx-auto col-lg-2 d-lg-block text-center justify-content-center align-items-center"
        style={{ hieght: "5rem" }}
      >
        <h5>
          <span className="d-lg-none">Price:</span> ${price}
        </h5>
      </div>
      <div
        className="col-10 mx-auto col-lg-2 d-lg-block text-center justify-content-center align-items-center mb-sm-2"
        style={{ hieght: "5rem" }}
      >
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            decreaseCount(id);
          }}
        >
          -
        </button>
        <span className="btn btn-outline-dark mx-2">{count}</span>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            increaseCount(id);
          }}
        >
          +
        </button>
      </div>
      <div
        className="col-10 mx-auto col-lg-2 d-lg-block text-center justify-content-center align-items-center"
        style={{ hieght: "5rem" }}
      >
        <i
          className="text-danger fa fa-trash fa-2x"
          style={{ cursor: "pointer" }}
          onClick={() => {
            removeProduct(id);
          }}
        ></i>
      </div>
      <div
        className="col-10 mx-auto col-lg-2 d-lg-block text-center justify-content-center align-items-center mb-3 mb-lg-0"
        style={{ hieght: "5rem" }}
      >
        <h5>
          <span className="d-lg-none">Total: </span>${total}
        </h5>
      </div>
    </div>
  );
}
