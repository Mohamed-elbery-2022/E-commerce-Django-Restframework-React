import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { listTopProducts } from '../actions/productActions'

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  const dispatch = useDispatch()

  const productTopRated = useSelector(state => state.productTopRated)
  const { products } = productTopRated

  useEffect(() => {
      dispatch(listTopProducts())
  }, [dispatch])
  return (
    <>
      <Slider {...settings}>
        {products.map((value, index) => {
          return (
            <div className=''>
              <div className='card my-5' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft bg-dark'>{value.name}</span>
                  <span className='tright'>{value.rating}</span>
                </div>
                <Link to={`/product/${value._id}`}>

                <div className=''>
                  <img src={value.image} alt=''  className='card-img' />
                </div>
                </Link>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
