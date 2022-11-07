import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductListScreenc from './screens/ProductListScreenc'
import ProductEditScreenc from './screens/ProductEditScreenc'
import ProductEditScreencc from './screens/ProductEditScreencc'



import OrderListScreen from './screens/OrderListScreen'
import WishlistScreen from './screens/WishlistScreen';
import Collections from './screens/Collections';
import Electronics from './screens/Electronics';
import Fashion from './screens/Fashion';
import Computing from './screens/Computing';
import HealthBeauty from './screens/HealthBeauty';
import HomeOffice from './screens/HomeOffice';
import Supermarket from './screens/Supermarket'
import Contact from './screens/ContactUs'
import Shop from './shops/Shop'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/Wishlist/:id?' component={WishlistScreen} />
          <Route path='/all' component={Collections} />
          <Route path='/electronic' component={Electronics} />
          <Route path='/fashion' component={Fashion} />
          <Route path='/computing' component={Computing} />
          <Route path='/health' component={HealthBeauty} />
          <Route path='/supermarket' component={Supermarket} />
          <Route path='/home' component={HomeOffice} />
          <Route path='/contact' component={Contact} />
          <Route path='/brand' component={Shop} />









          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

          <Route path='/productlistc' component={ProductListScreenc} />
          <Route path='/products/:id/add' component={ProductEditScreenc} />
          <Route path='/products/:id/edit' component={ProductEditScreencc} />


          <Route path='/admin/orderlist' component={OrderListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
