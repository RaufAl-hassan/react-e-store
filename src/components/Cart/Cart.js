import React from "react";
import { Consumer } from "../../context";
import CartLabels from "./CartLabels";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <Consumer>
      {(value) => {
        const { cart } = value;

        if (!cart.length) {
          return <h1 className="text-center">Your cart is empty</h1>;
        } else {
          return (
            <div>
              {/* cart labels */}
              <CartLabels />
              {/* cart List */}
              {cart.map((item) => {
                return <CartList key={item.id} product={item} value={value} />;
              })}
              {/* cart totals */}
              <CartTotals value={value} />
            </div>
          );
        }
      }}
    </Consumer>
  );
}
