import './index.css';
import Header from './components/header';
import React from 'react';
import Footer from './components/footer';
import Carousel from './components/Carousel';
import Images from './components/images';
import Cards6 from './components/Cards6';
import OccasionWear from './components/OccasionWear';
import WinterWonders from './components/WinterWonders';
import AccessoriesSection from './components/AccessoriesSection';
import FootwearSection from './components/FootwearSection';
import MomsCorner from './components/MomsCorner';
import SportswearBanner from './components/SportswearBanner';
import { Routes, Route } from 'react-router-dom';
import BrandPromotion from './components/BrandPromotion';
import CartPage from './components/CartPage';
import BeautyProducts from './components/ProductListing';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import SignUp from './pages/signUp'; 
import 'react-toastify/dist/ReactToastify.css';
import MyOrdersPage from './components/MyOrdersPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={
          <>
            <Carousel />
            <BeautyProducts />
       
            <Cards6 />
            <BeautyProducts />
            <OccasionWear />
            <WinterWonders />
            <AccessoriesSection />
            <FootwearSection />
            <MomsCorner />
            <SportswearBanner />
            <BeautyProducts />
            <BrandPromotion />
          </>
        } />
        <Route path="/cart" element={<CartPage />} />
         <Route path="/orders" element={<MyOrdersPage />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
