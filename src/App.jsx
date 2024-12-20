import React, { useState } from 'react'; // Added useState import
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Placeorder from './pages/PlaceOrder/Placeorder.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false); 

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>} 
      <div className="app">
        <Navbar setShowLogin={setShowLogin} /> {/* Passing setShowLogin to Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
