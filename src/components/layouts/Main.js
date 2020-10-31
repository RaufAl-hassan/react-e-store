import React from "react";
import { Route, Switch } from "react-router-dom";

import Products from "../Products/Product";
import Details from "../Details";
import Cart from "../Cart/Cart";
import Modal from "../Modal";
import Default from "../Default";

export default function Main() {
  return (
    <main className="bg-light">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </div>
      <Modal />
    </main>
  );
}
