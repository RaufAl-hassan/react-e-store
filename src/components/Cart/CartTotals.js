import React from "react";
import PaypalButton from "../PaypalButton";

export default function CartTotals({ value, history }) {
  const { subTotal, tax, total, handleClearList } = value;

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
      <PaypalButton
        total={total}
        handleClearList={handleClearList}
        history={history}
      />
    </div>
  );
}
