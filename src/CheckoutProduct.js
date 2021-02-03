import React from 'react'
 
function CheckoutProduct({id,title,image,price,rating}) {
    return (
        <div className="CheckoutProduct">
        <img src={image} alt="" />
        <div className="ckout_info">
       <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
              Array(rating).fill().map((_) => (
                  <p className="rt">&#11088;</p>
              ))
          }
          </div>
        </div>
             </div>
    )
}

export default CheckoutProduct
