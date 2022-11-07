import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import Category from '../components/Category'


function ProductCarousel() {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { error, loading, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (<div className='row'>
                <div className='col-md-2 '>
                <h4>
                 Categories <i className='fa fa-chevron-down my-3'></i>
                </h4>
                <Category />
                
    
              </div>
              <div className='col-1'></div>
                <Carousel pause='hover' className='bg-dark col-md-9'>
             
                    {products.map(product => (
                        <Carousel.Item key={product._id} className=''>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name}   />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{product.name} (${product.price})</h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
                </div>
            )

    )
}

export default ProductCarousel
