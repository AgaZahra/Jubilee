import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../src/assets/sass/style.scss';

import Layout from './shared/layout/Layout';
import NotFoundPage from './shared/layout/NoutFoundPage';
import { urls } from './shared/urls';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Dashboard from './pages/AdminPanel/Dashboard';
import AddProduct from './pages/AdminPanel/products/AddProducts';
import EditProduct from './pages/AdminPanel/products/EditProducts';
import Basket from './pages/Basket';
import {Wishlist }from './pages/Wishlist';

// Auth Pages
import Login from '../src/pages/Auth/Login';
import Register from '../src/pages/Auth/Register';
import Account from '../src/pages/Auth/Account';

// Providers
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist';
import Faq from './pages/Faq';
import {Contact} from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={urls.HOME} element={<Layout />}>
     <Route index element={<Home />} />
      <Route path={urls.SHOP} element={<Shop />} />
      <Route path={urls.ABOUT} element={<About />} />
      <Route path={urls.FAQ} element={<Faq/>} /> 
      <Route path={urls.CONTACT} element={<Contact/>} /> 

      
      <Route path={urls.CHECKOUT} element={<Checkout/>} />
      <Route path={urls.PRODUCT_DETAILS} element={<ProductDetails />} />
      {/* Admin Panel */}
      <Route path={urls.DASHBOARD} element={<Dashboard />} />
      <Route path={urls.ADD_PRODUCT} element={<AddProduct />} />
      <Route path={urls.EDIT_PRODUCT} element={<EditProduct />} />

      {/* Basket & Wishlist */}
      <Route path={urls.BASKET} element={<Basket />} />
      <Route path={urls.WISHLIST} element={<Wishlist />} />

      {/* Auth */}
      <Route path={urls.LOGIN} element={<Login />} />
      <Route path={urls.REGISTER} element={<Register />} />
      <Route path={urls.ACCOUNT} element={<Account />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
