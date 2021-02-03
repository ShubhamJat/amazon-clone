import React from 'react'
import {useStateValue } from "./StateProvider";
import ck from "./CHECKOUT.jpg"
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{basket}] = useStateValue();
     return (
        <div className="checkout">
            <img className="checkout__ad" 
            src={ck}
            alt="checkout image"

        />
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty!!</h2>
                <p>
                    You have no items in your basket. To buy one or more items, click on "Add to Basket" button.
                </p>
            </div>
        )
        :
        (
              <div>
                <h2 className="checkout__title">Your Shopping Basket </h2>
               {basket.map(item => {
                   //console.log(item);
                   return(
                <CheckoutProduct id={item.id}
                title ={item.title}
                image ={item.image}
                price ={item.price}
                rating ={item.rating}
                />
                )})}
            </div>   
        )}

        </div>
    );
}

export default Checkout
