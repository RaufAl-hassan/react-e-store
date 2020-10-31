import React from "react";

export default function CartTotals(props) {
  const { subTotal, tax, total, handleClearList } = props.value;

  return (
    <div className="text-right">
      <button
        className="mb-1 btn btn-outline-danger"
        onClick={() => {
          handleClearList();
        }}
      >
        Clear Cart
      </button>
      <h5>Sub Totals: {`$${subTotal}`}</h5>
      <h5>Tax: {`$${tax}`}</h5>
      <h5>Total: {`$${total}`}</h5>
    </div>
  );
}
