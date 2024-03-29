import React from 'react';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{basket,user}] = useStateValue();
//   var a=user.email.split("@");
//     console.log(a[0]);

     
    return (
        <nav className="header">
           <Link to="/">
            <img className="header__logo" src="https://www.etcentric.org/wp-content/uploads/2016/07/Amazon_Logo_Black_bg.jpg" alt=""/>
           </Link>

            <div className="header__search">
           <input type="text" className="header__searchInput" />
           <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
            <Link to="/login" className="header__link">
            <div className="header__option">
                <span className="header_OptionLinkOne">Hello</span>
                {user != null ?
                <span className="header_OptionLinkTwo">{(user.email.split("@"))[0]}</span>
                :
                <span className="header_OptionLinkTwo">Sign In</span>
                }
            </div>
            </Link>

            <Link to="/" className="header__link">
            <div className="header__option">
                <span  className="header_OptionLinkOne">Returns</span>
                <span  className="header_OptionLinkTwo">& Orders</span>
            </div>
            </Link>


            <Link to="/" className="header__link">
            <div className="header__option">
                <span  className="header_OptionLinkOne">Your</span>
                <span  className="header_OptionLinkTwo">Prime</span>
            </div>
            </Link>
            
            <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
               <span className="Basket_Count">{basket?.length}</span>
               <ShoppingBasketIcon />
            </div>
            </Link>


            </div>
        </nav>
    )
}

export default Header
