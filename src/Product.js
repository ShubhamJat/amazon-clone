import React from 'react'
import "./Product.css"

function Product({id,title,price,image,rating}) {
    return (
       <div className="product">
       <div className="product__info">
        <p>{title}</p> 
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
        <img src={image} />
        <button>Add to Basket</button>
       </div>
    )
}

export default Product
