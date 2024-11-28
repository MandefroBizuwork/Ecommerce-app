import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/LandingPage';
import Signin from './Pages/Auth/Signin';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import CategoryResult from './Pages/Product/CategoryResult';
import ProductDetail from './Pages/Product/ProductDetail';
// import NotFound from './Pages/';  // Create this component for unknown routes

const PageRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:catgryName" element={<CategoryResult />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* Fallback route for unknown paths */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default PageRouting;
