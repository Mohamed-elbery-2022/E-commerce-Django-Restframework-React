

import React from "react"
import { Link } from 'react-router-dom'



const CategoryScreen = () => {
        const data = [
        {
        cover: '../images/yv.png',
        name: "Electronics",
        link: "electronic",
        },
        {
        cover:'../images/fash.png',
        name: "Fashion",
        link: "fashion",
        },
        {
        cover: './images/BeautyPerfumes.png',
        name: "Health&Beauty",
        link: "health",
        },
        {
        cover:'/images/PhonesAccessories.png',
        name: "Computing",
        link: "computing",
        },
        {
        cover: '/images/Supermarket.png',
        name: "Supermarket",
        link: "supermarket",
        },
        {
        cover: '/images/home.png',
        name: "Home&Office",
        link: "home",
        },
        
        
        
        
        
        ]
        return (
        <>
        {/* <section className='wrapper card-group d-flex flex-row mb-2'> */}
        <div className='card-group'>
                {data.map((val, index) => {
                return (
                <div className='card ms-4' key={index}>
                <div className='card-img-top'>
                <Link to={`/${val.link}`} className='nam' >

                <img src={val.cover} alt='category' width='300px' className="fluid img"/>
                           </Link>
                                </div>
                <Link to={`/${val.link}`} className='nam' >

                <i className="card-title text-center ms-4">{val.name}</i>
                </Link>
                </div>
                )
                })}
        </div>
        {/* </section> */}
        </>
        )
}

export default CategoryScreen
