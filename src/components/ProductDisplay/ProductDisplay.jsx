
import React from 'react'
import { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

import { ShopContext } from '../../context/ShopContext'

const ProductDisplay=(props)=>{
    const {product} =props;
    const {addToCart}=useContext(ShopContext);

    return(
        <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
              
            </div>
            <div className='productdisplay-img'>
                <img className="productdisplay-main-img" src={product.image} alt=""/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull_icon} alt=""/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>Rs {product.old_price}</div>
                <div className='productdisplay-right-price-new'>Rs {product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                
            </div>
            <div className='productdisplay-right-size'>
             
              <div className='productdisplay-right-sizes'>
              Immerse yourself in soothing guided meditation sessions led by experienced mindfulness experts. These sessions are crafted to calm your mind, reduce tension, and promote a sense of inner peace.
              <br/>
              Our plan includes a series of gentle exercises specifically curated to alleviate physical tension. From simple stretches to yoga poses, these activities are designed to release built-up stress and promote overall well-being.
              </div>  
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           
        </div>    
        </div>
    )
}

export default ProductDisplay;
