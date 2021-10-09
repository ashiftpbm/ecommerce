import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import ProductList from './components/ProductList';

import Context from "./Context";
import "./App.css";

export default class App extends Component {


  render() {
    return (
      <Context.Provider>
        <Router ref={this.routerRef}>
        <div className="App">
          <nav
            className="navbar container">
            <div className="navbar-brand">
              <img className ="logo" src= "https://media.istockphoto.com/vectors/vector-logo-letter-d-wing-vector-id1012390044?k=20&m=1012390044&s=612x612&w=0&h=r08VK9ey2lZXiSAdEn4u1bqm8bOix7vftY-Tu-noZDs="/>
              <b className="navbar-head">Dailymart</b>
            </div>
            
                <Link to="/products" className="navbar-item">
                    Products
                </Link>
                <span className="navbar-item">
                  Cart
                </span>
                <span className="navbar-item">
                    Login
                 </span>
            </nav>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/products" component={ProductList} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
