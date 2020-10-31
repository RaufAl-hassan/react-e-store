import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import "./App.css";
import Footer from "./components/layouts/Footer";

import { Provider } from "./context";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </Provider>
    );
  }
}
