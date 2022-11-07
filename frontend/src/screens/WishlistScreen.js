import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToWishlist, removeFromWishlist } from '../actions/WishlistActions'

function WishlistScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const Wishlist = useSelector(state => state.Wishlist)
    const { WishlistItems } = Wishlist

    useEffect(() => {
        if (productId) {
            dispatch(addToWishlist(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromWishlistHandler = (id) => {
        dispatch(removeFromWishlist(id))
    }


    return (
        <Row>
                  <div style={{height: "100px"}}></div>

            <Col md={8}>
                <h1>Shopping Wishlist</h1>
                {WishlistItems.length === 0 ? (
                    <Message variant='info'>
                        Your Wishlist is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                        <ListGroup variant='flush'>
                            {WishlistItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                        <Col md={2}>

                                        </Col>

                                        <Col md={3}>

                                        </Col>

                                        <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromWishlistHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Wishlist ({WishlistItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        </ListGroup.Item>
                    </ListGroup>




                </Card>
            </Col>
        </Row>
    )
}

export default WishlistScreen
