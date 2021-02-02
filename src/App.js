import React from "react";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import './App.css';
import './Header.css'
import './Home.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const intialState ={
    basket: [],
}
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
          
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;