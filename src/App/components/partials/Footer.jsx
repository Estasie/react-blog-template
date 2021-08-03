import React from "react";
import logo from "../../assets/logo.svg";
import fb from "../../assets/social/fb.svg";
import pinterest from "../../assets/social/pint.svg";

import twitter from "../../assets/social/twitter.svg";
import behance from "../../assets/social/behance.svg";
import inst from "../../assets/social/inst.svg";

import googleplus from "../../assets/social/gplus.svg";
import FooterSocialButton from "../buttons/FooterSocialButton";
import Divider from "../Divider";

import Home from "../../pages/Home";
import Recipes from "../../pages/Recipes";
import Article from "../../pages/Article";
import Contact from "../../pages/Contact";
import Purchase from "../../pages/Purchase";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Footer() {
  const buttons = [fb, pinterest, twitter, behance, inst, googleplus];
  return (
      <Router>
    <footer>
      <a href="/" title="Go to Homepage" className="footer--logo">
        <img id="logo" src={logo} alt={logo}/>
      </a>

      <nav className="footer-nav">
        <Link className="footer--nav-item" to="/">
          Home
        </Link>

        <Link className="footer--nav-item" to="/recipes">
          Recipes
        </Link>
        <Link className="footer--nav-item" to="/article">
          Article
        </Link>
        <Link className="footer--nav-item" to="/contact">
          Contact
        </Link>
        <Link className="footer--nav-item" to="/purchase">
          Purchase
        </Link>
      </nav>

      <div className="footer-social">
        {buttons.map((el) => {
          return <FooterSocialButton key={el} el={el} />;
        })}
      </div>
      <Divider />
      <p className="copyright">@2019 Logwork. All Right Reserved.</p>
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
    </footer>
    </Router>
  );
}
