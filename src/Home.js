import React from 'react';
import "./Home.css";
import home from './home.jpg';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="HOME_IMG" src={home} alt="this is home img"/>
        

           <div className="home__row">
            <Product id="12213" title= "Jatt first product1" price={150}          rating={5}   image="https://images-na.ssl-images-amazon.com/images/I/61ZxLykowfL._SL1100_.jpg" />
             <Product id="4" title= "Jatt first product2" price={150}          rating={5}   image="https://images-na.ssl-images-amazon.com/images/I/61ZxLykowfL._SL1100_.jpg" />
           </div>

 <div className="home__row">
             <Product id="122143" title= "Jatt first product3" price={150}          rating={5}   image="https://images-na.ssl-images-amazon.com/images/I/61ZxLykowfL._SL1100_.jpg" />
             <Product id="1221456" title= "Jatt first product4" price={150}          rating={5}   image="https://images-na.ssl-images-amazon.com/images/I/61ZxLykowfL._SL1100_.jpg" />
             <Product id="122156" title= "Jatt first product5" price={150}          rating={5}   image="https://images-na.ssl-images-amazon.com/images/I/61ZxLykowfL._SL1100_.jpg" />

           </div>
            <div className="home__row">
            <Product id="12216" title= "Jatt first product" price={150}          rating={5}   image="https://images-na.ssl-images-amazon.com/images/I/61ZxLykowfL._SL1100_.jpg" />
           </div>




        </div>
    )
}

export default Home
