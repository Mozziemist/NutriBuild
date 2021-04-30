import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./AppStyle.css";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Create from "./components/Create/Create";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/create" exact component={Create} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
