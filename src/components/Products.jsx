import ProductItems  from './ProductItems' 
import React, { useState } from "react";
import '../css/products.css'
import MiniImages from './MiniImages'
import data from '../data'

export default function Products(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleNextImage = () => {
        if (currentImageIndex < data[0].image.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      };
    
      const handlePreviousImage = () => {
        if (currentImageIndex >  0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      };
    const sneakers = data.map(sneaker => (
                // spread the products elements
                <MiniImages key={sneaker.id} {...sneaker} />
            )
        )
    return(
        <div className="container flex">
            <div className="product flex center">
                <img src={data[0].image[currentImageIndex]} alt="">
                </img>
                <div className="arrows_mobile">
                    <div className="arrow-container" onClick={handlePreviousImage}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path className="previous" d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                        </svg>
                    </div>
                    <div className="arrow-container" onClick={handleNextImage}>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path  className="next" d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                    </svg>
                    </div>
                </div>
                <div className="mini-products flex space center">
                    {sneakers}
                </div>
            </div>
            <div className="details">
                <h3 className="title fw-700">SNEAKER COMPANY</h3>
                <h2 className="title2 fw-700">Fall Limited Edition<br/>Sneakers</h2>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                {data.map(product => (
                    <ProductItems data={product}/>
                ))}
            </div>
        </div>
    )
}