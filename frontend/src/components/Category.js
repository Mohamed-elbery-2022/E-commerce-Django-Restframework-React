import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

function Category() {
    
   
    return (
        <div class="list-group">
                {/* <LinkContainer to='/all' className='d-flex p-2 '>

                 <span  className="ms-3" ><h6>All</h6></span>
                </LinkContainer> */}
               
                <LinkContainer to='/electronic' className='d-flex p-2 ' >
                <span  className="ms-3" ><i class="fa-solid fa-microchip mx-3"></i> <h6> Electronics</h6></span>
                </LinkContainer>
                <LinkContainer to='/fashion' className='d-flex p-2 '>

                <span className="ms-3"><i class="fa-solid fa-shirt mx-3"></i><h6>Fashion</h6></span>
                </LinkContainer>
                <LinkContainer to='/computing' className='d-flex p-2 '>
                <span  className=" ms-3"><i class="fas fa-laptop-medical mx-3"></i><h6>Computing</h6></span>
                </LinkContainer>
                <LinkContainer to='/health' className='d-flex p-2 '>
                <span  className=" ms-3 "><i class="fa-solid fa-mortar-pestle mx-3"></i><h6>Health&Beauty</h6></span>
                </LinkContainer>
                <LinkContainer to='/supermarket' className='d-flex p-2 '>
                <span className=" ms-3"><i class="fa-solid fa-apple-whole mx-3"></i><h6>Supermarket</h6></span>
                </LinkContainer>
                <LinkContainer to='/home' className='d-flex p-2 '>

                <span  className=" ms-3"><i class="fa-solid fa-building mx-3"></i><h6>Home&Office</h6></span>
                </LinkContainer>
                

        </div>
    )
}

export default Category;
