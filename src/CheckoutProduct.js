import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";
function CheckoutProduct({id,title,image,price,rating}) {
    console.log(id,title,image,price,rating);
    const [{basket}, dispatch] =useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
                id: id,
            
        })
    };

    
    return (
        <div className="CheckoutProduct">
        <img className="CheckoutProduct_image" src={image} alt="" />
        <div className="ckout_info">
        <p className="CKoUT__title">{title}</p>
       <p className="CheckoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct__rating">
          {
              Array(rating).fill().map((_) => (
                  <p className="rt">&#11088;</p>
              ))
          }
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
             </div>
    )
}

export default CheckoutProduct
