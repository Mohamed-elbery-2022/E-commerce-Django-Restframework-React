import React from 'react';
import { listProducts } from '../actions/productActions';
import {  useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom'




function Computing() {
  const productList = useSelector(state => state.productList)

  const {  products } = productList
  const BuildList = ({ catgory }) => {
      const content = products
        .filter(o => o.category === catgory)
        .map((o, index) => <div key={index} className='grid2' >

<Card className="my-3 p-3 rounded ">
          <Link to={`/product/${o._id}`}>
              <Card.Img src={o.image} />
          </Link>

          <Card.Body>
              <Link to={`/product/${o._id}`}>
                  <Card.Title as="div">
                      <strong>{o.name}</strong>
                  </Card.Title>
              </Link>

              <Card.Text as="div">
                  <div className="my-3">
                      <Rating value={o.rating} text={`${o.numReviews} reviews`} color={'#f8e825'} />
                  </div>
              </Card.Text>


              <Card.Text as="h3">
                  ${o.price}
              </Card.Text>
          </Card.Body>
      </Card>
        </div>);
  
      return (
        <div className="row">
                            <div style={{height: "100px"}}></div>

          <h5> {catgory} </h5>
          <div className="grid1 ">
          {content}</div>
        </div>
      );
    };

    return (
        <div className="Computing">

      <div className="row">
        <BuildList catgory='Computing' />
     
      </div>
</div>
    )
}

export default Computing;
