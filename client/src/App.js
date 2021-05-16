import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./AppStyle.css";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";
import Create from "./components/Create/Create";
import RecipeFull from "./components/Recipes/RecipeFull/RecipeFull";
import MyRecipes from "./components/MyRecipes/MyRecipes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/create" exact component={Create} />
        <Route path="/recipe/:id" exact component={RecipeFull} />
        <Route path="/myRecipes" exact component={MyRecipes} />
        <Route path="*">
          <div className="container d-flex justify-content-center">
            <h2 className="text-dark bg-light my-5">404 PAGE NOT FOUND</h2>
          </div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
