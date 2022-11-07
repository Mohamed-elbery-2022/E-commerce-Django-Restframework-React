import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
// import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
// import SlideCard from '../components/SlideCard';
import Wrapper from '../wrapper/Wrapper'
import TopCate from '../top/TopCate'
import FlashDeals from '../flashDeals/FlashDeals'
// import Shop from '../shops/Shop'
import FashionScreen from '../components/Fasionscreen'
import CategoryScreen from '../components/CategoryScreen'




function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
                        <div style={{height: "90px"}}></div>

            {!keyword && <ProductCarousel />}
            <div style={{height: "30px"}}></div>
            <FlashDeals />
            <div style={{height: "30px"}}></div>

            <h2 >Brand </h2>

<FashionScreen />
{/* <Shop /> */}
<div style={{height: "30px"}}></div>

<h2 >Category </h2>

<CategoryScreen />
<div style={{height: "30px"}}></div>

            <TopCate />
            <div style={{height: "30px"}}></div>

            {/* <h1>Latest Products</h1> */}
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                       <h2 className='text-center'>Our Service</h2>
                       <div style={{height: "10px"}}></div>

                       
                        {/* {!keyword && <SlideCard />} */}
                        <Wrapper />
                    </div>
            }
        </div>
    )
}

export default HomeScreen
