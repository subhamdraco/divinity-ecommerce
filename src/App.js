import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import About from './pages/About/Index';
import Listing from './pages/Listing/Index';
import Details from './pages/Details/Index'
import Cart from './pages/Cart/Index.js';
import Register from './pages/Register/Index.js';
import Login from './pages/Login/Index.js';
import AuthLayout from './layouts/AuthLayouts';
import MainLayout from './layouts/MainLayouts.js';
import OrderSuccess from './pages/OrderSucces/Index';
import Checkout from './pages/CheckOut/Index.js';
import ProtectedRoute from './components/protectedroutes/Index';
import MyOrders from './pages/UserOrders/Index.js';
import OrderTracking from './pages/OrderTracking/Index.js';
import Wishlist from './pages/Wishlist/Index.js';
import PaymentFailure from './pages/PaymentFailure/Index.js';


function App() {

  return (
    <>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route exact={true} path="/register" element={<Register />} />
        <Route exact={true} path="/login" element={<Login />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route exact={true} path="/" element={<Home/>} />
        <Route exact={true} path="/about" element={<About />} />
        <Route exact={true} path="/listing" element={<Listing />} />
       
        {/* <Route exact={true} path="/cart" element={<Cart />} />
        <Route exact={true} path="/checkout" element={<Checkout />} />
        <Route exact={true} path="/order-success/:order_number" element={<OrderSuccess/>} /> */}
      </Route>
      
        <Route element={<ProtectedRoute />}>
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order-tracking/:order_number" element={<OrderTracking />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success/:order_number" element={<OrderSuccess />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/payment-failed/:order_number" element={<PaymentFailure />} />
          <Route exact={true} path="/product/details/:id" element={<Details />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
