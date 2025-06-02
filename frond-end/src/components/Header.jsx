import React, { useState, useEffect ,useContext } from 'react';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaStore,
  FaHeadset,
  FaClipboardCheck,
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaPlus,
  FaTrash,
  FaChevronDown,
  FaBell,
  FaStar,
} from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const { cart,placeOrder } = useContext(CartContext);


  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleMouseEnter = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      x: rect.left,
      y: rect.bottom + 8
    });
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setOpenMenu(null), 100);
  };

  return (
    <div className="relative">
      {/* Top Announcement Bar */}
 <div className="bg-pink-600 text-white text-center py-2 text-sm">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <FaBell className="text-yellow-300" />
          <span>🎉 Special Offer: Get 50% OFF on your first order! Use code: WELCOME50</span>
        </div>
        <div className="space-x-2">
          <Link to="/login">
            <button className="bg-white text-pink-600 px-3 py-1 rounded text-xs hover:bg-pink-100">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-pink-600 px-3 py-1 rounded text-xs hover:bg-pink-100">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>

      {/* Main Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="ml-3 hidden sm:block">
                <Link to="/">
                <h1 className="text-xl font-bold text-pink-600">StyleHub</h1>
                <p className="text-xs text-gray-500">Fashion & More</p>
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, categories..."
                  className="w-full h-12 pl-4 pr-12 border-2 border-gray-200 rounded-full text-sm focus:border-pink-500 focus:outline-none"
                />
                <button className="absolute right-2 top-2 h-8 w-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                  <FaSearch className="text-white text-sm" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop Navigation Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              {[
                { icon: FaMapMarkerAlt, text: 'Location', color: 'text-blue-600' },
                { icon: FaStore, text: 'Stores', color: 'text-green-600' },
                { icon: FaHeadset, text: 'Support', color: 'text-orange-600' },
                { icon: FaClipboardCheck, text: 'Track', color: 'text-purple-600' },
                { icon: FaUserCircle, text: 'Account', color: 'text-indigo-600' },
                { icon: FaHeart, text: 'Wishlist', color: 'text-red-600' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center cursor-pointer hover:opacity-75">
                  <item.icon className={`${item.color} text-lg mb-1`} />
                  <span className="text-xs text-gray-600">{item.text}</span>
                </div>
              ))}
              
              {/* Cart Icon */}
                <h1 className="text-xl font-bold">
  
        <Link to="/orders" className="text-blue-600 hover:underline">My Orders</Link>
    </h1>
      <Link to="/cart" className="relative">
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm">
          {cart.length}
        </span>
      </Link>
            
            </div>
          </div>
        </div>
      </nav>



    </div>
  );
};

export default Navbar;