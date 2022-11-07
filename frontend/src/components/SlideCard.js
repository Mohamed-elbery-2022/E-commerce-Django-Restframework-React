import React from 'react'
import {  useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom'


const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  const productList = useSelector(state => state.productList)
    const {  products } = productList
  return (
    <>
      <Slider {...settings}>
        {products.map((product, keyword) => {
          return (
            <>
              <div className='box d_flex top' keyword={keyword}>
              <Link to={`/product/${product._id}`}>
                <div className='left'>
                  <h1>{product.name}</h1>
                  {/* <p>{product.description}</p> */}
                  {/* <button className='btn-primary'>Visit Collections</button> */}
                </div>
                <div className=''>
                  <img src={product.image} alt='' />
                </div>
                </Link>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
