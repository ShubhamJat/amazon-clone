import React, {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import Login from "./Login";
import './App.css';
import './Header.css'
import './Home.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from "./Checkout";
import {useStateValue} from "./StateProvider"; 
import { auth } from "./firebase";
function App() {
 const [{basket,user},dispatch] =useStateValue();
 useEffect(() => {
   const unsuscribe=auth.onAuthStateChanged((authUser) => {
   if(authUser){
     dispatch({
       type :"SET_USER",
       user :authUser
     });
   }
   else {
     dispatch({
       type :"SET_USER",
       user :null
     });
   }})
   return () =>{
     unsuscribe();
   }
 }, [] );
 
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
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
