import React from "react";
import logo from '../../assets/logo.svg';
import Home from '../../pages/Home';
import Recipes from "../../pages/Recipes";
import Article from "../../pages/Article";
import Contact from "../../pages/Contact";
import Purchase from "../../pages/Purchase";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header() {
  return (
    <Router>
    <header>
      <a href="/" title="Go to Homepage" className="header--logo">
        <img id="logo" src={logo} alt={logo}/>
      </a>
      <nav className="header--nav">
        
        <Link className="header--nav-item" to="/">Home</Link>

        <Link className="header--nav-item" to="/recipes">Recipes</Link>
        <Link className="header--nav-item" to="/article">Article</Link>
        <Link className="header--nav-item" to="/contact">Contact</Link>
        <Link className="header--nav-item" to="/purchase">Purchase</Link>
        
      </nav>
      <div className="burger-menu"></div>
      <Switch>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/purchase">
            <Purchase />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </header>
    </Router>
  );
}
