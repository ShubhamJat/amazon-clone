import React from 'react';
import './Subtotal.css';
import CurrencyFormate from "react-currency-format";
import {useStateValue } from "./StateProvider";
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const subtotal = (basket) =>{
        var price=0;
        basket.map((item,i) => {
            price=price + item.price;
        })
        return price;
    }
    return (
        <div className="subtotal">
        { subtotal(basket) > 499 ? 
                <span className="msg">Part of your order qualifies for FREE Delivery. Select this option at checkout.</span>
                : ""
            }
        <div className="subtotal_c">
            
            <span >Subtotal ({basket.lenght} item):</span> 
            <CurrencyFormate  
                decimalScale={2}
                value={subtotal(basket)}
                displayType={"text"}
                thousandSeparetor={true}
                prefix={"$"}
            />
            
            </div>
            <div className="subtotal_c">
            <input type="checkbox" className="checkbox" /><span className="checkbox_bx"> This order contains a gift</span>
            </div>
            <button className="btn">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
