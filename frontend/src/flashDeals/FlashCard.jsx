import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { listProducts } from '../actions/productActions'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn ' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn ' onClick={onClick}>
      <button className='prev '>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems }) => {

  const productList = useSelector(state => state.productList)
  const { products } = productList



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div className=''>
              <div className='product mtop'>
              <Link to={`/product/${product._id}`}>

                <div className='img'>
                  <img src={product.image} alt='' width='150px' />
                </div>
                </Link>
                <div className='product-details'>
                  <h5>{product.name}</h5>
                  <div className='price'>
                    <h6>${product.price} </h6>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  </div>

                </div>
              </div>
            </div>
          )
        })}

      </Slider>
    </>
  )
}

export default FlashCard
