import React from "react"
import { useDispatch, useSelector } from 'react-redux'

// import Category from "../components/Category"
import ShopCart from "./ShopCart"
import "./style.css"
import { listProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'



const Shop = ({ shopItems }) => {
  const productList = useSelector(state => state.productList)

  const {  products } = productList


  

  const BuildAllList = () => {
    const categories = products.reduce((names, name) => {
      if (!names.includes(name.brand)) names.push(name.brand);
      return names;
    }, []);

    const content = categories.map((name, index) => (
      <BuildList key={index} bran={name} />
    ));

    return content;
  };

  const BuildList = ({ bran }) => {
    const content = products
      .filter(o => o.brand === bran)
      .map((o, index) => <div key={index}>

      </div>);

    return (
      <div className="col">
                    {/* <Link to={`/product/${o._id}`} className='nam'> */}

        <h5> {bran} </h5>
        {/* </Link> */}
        {/* {content} */}
      </div>
    );
  };
  return (
    <>
      <section className='shop background row '>
      <div style={{height: "170px"}}></div>

        <div className='container d_flex col-2 '>
        <h4 className="text-danger">Brands | Shop</h4>

          <BuildAllList />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                
              </div>
            </div>
            </div>
            </div>
            <div className='product-content  grid1 col-10'>
            {/* <h2 className="text-center">Brand</h2> */}
              <ShopCart  shopItems={shopItems} />
            </div>
         
      </section>
    </>
  )
}

export default Shop
