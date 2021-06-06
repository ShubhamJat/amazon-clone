import React from 'react'
import {useStateValue } from "./StateProvider";
import ck from "./CHECKOUT.jpg"
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
    const [{basket}] = useStateValue();
     return (

    <div >
        <img className="checkout_ad" src={ck} alt="checkout image"/> 
        <div className="checkout">
            < div className="checkout_left">
            
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
                    {basket.map(item => 
                        <CheckoutProduct id={item.id}  title ={item.title} image ={item.image} price ={item.price} rating ={item.rating} />
                    )}
                </div>   
             )}
        </div>
        { basket.length > 0 ?
            <div className="checkout__right">
                <Subtotal />
            </div>
        : ""
      }
    </div>
</div>    
    );
}

export default Checkout
