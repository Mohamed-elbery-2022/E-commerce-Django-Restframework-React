import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { listProducts } from '../actions/productActions'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ShopCart = ({ shopItems  }) => {
  const productList = useSelector(state => state.productList)
  const { products } = productList

  return (
    <>
      {products.map((product) => {
        return (
          <div className='box '>
            <div className='product mtop '>
            <Link to={`/product/${product._id}`} className='nam'>
              <div className='img'>
              <img src={product.image} alt='' width='50px'/>
              <h5 className=' text-dark '>{product.name}</h5>
              <span className=' text-dark '>brand:{product.brand}</span>
              
              </div>
             </Link>
                <div className='price'>
                  <h4>${product.price}.00 </h4>
                  <Link to={`/product/${product._id}`} className='nam'>
                  <Button variant="dark">Add to Cart <i className="fas fa-shopping-cart"></i> </Button>
                  </Link>
                  
                
                </div>
              </div>
            </div>
            
          
        )
      })}
       
    </>
  )
}

export default ShopCart
