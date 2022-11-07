import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container,  NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import './header.css'


function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect className=' d-flex mb-2 sticky'>
                <Container>
                    
                    {/* <LinkContainer to='/' className='d-flex  text-warning '>
                        <Navbar.Brand >AlphaStore</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/'>
                                <Nav.Link className='text-white ms-3 fs-6'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/all'>
                                <Nav.Link className='text-white ms-3 fs-6' >Product</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/brand'>
                                <Nav.Link className='text-white ms-3 fs-6' >Brand</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contact'>
                                <Nav.Link className='text-white ms-3 fs-6'>contact</Nav.Link>
                            </LinkContainer> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>
                    <LinkContainer to='/' className='d-flex  text-warning '>
                        <Navbar.Brand >AlphaStore</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to='/'>
                                <Nav.Link className='text-white ms-3 fs-6'>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/all'>
                                <Nav.Link className='text-white ms-3 fs-6' >Product</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/brand'>
                                <Nav.Link className='text-white ms-3 fs-6' >Brand</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contact'>
                                <Nav.Link className='text-white ms-3 fs-6'>contact</Nav.Link>
                            </LinkContainer>
                        <SearchBox />
                        <Nav className="ms-auto p-2">

                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart  fs-5" ></i></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/Wishlist'>
                                                <Nav.Link ><i className="fas fa-heart fs-5"></i></Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/productlistc'>
                                        <NavDropdown.Item>MyProducts</NavDropdown.Item>
                                    </LinkContainer>
                                    

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                              
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i><span>Login</span></Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>AllProducts</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         
        </header>
    )
}

export default Header
