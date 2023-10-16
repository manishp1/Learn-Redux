import React from "react";
import '../component/Home.css'
import image from '../assets/iphone.webp'
import addToCart from '../assets/add-to-cart.png'
const Home = () => {
  return (
    <div>
        <div className="add-to-cart">
            <img src= {addToCart} />
        </div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src= {image} />
        </div>
        <div className="text-wrapper item">
            <span>IPhone</span>
        </div>
        <div className="btn-wrapper item">
            <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
