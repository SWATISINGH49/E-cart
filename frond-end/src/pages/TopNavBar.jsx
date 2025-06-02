import React from 'react';

const TopNavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Left section with logo */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-3xl font-bold text-pink-600">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Myntra_logo.png/320px-Myntra_logo.png" 
            alt="Logo"
            className="w-12"
          />
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black">MEN</a>
          <a href="#" className="hover:text-black">WOMEN</a>
          <a href="#" className="hover:text-black">KIDS</a>
          <a href="#" className="hover:text-black">HOME & LIVING</a>
          <a href="#" className="hover:text-black">BEAUTY</a>
          <a href="#" className="hover:text-black text-red-500">STUDIO <span className="text-xs text-red-500">NEW</span></a>
        </div>
      </div>

      {/* Center section with search */}
      <div className="flex-1 mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />
          <span className="absolute top-0 right-0 mt-2 mr-4 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Right section with icons */}
      <div className="flex space-x-8 items-center text-gray-600">
        <div className="flex flex-col items-center hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A7.5 7.5 0 0117.5 6h.086a7.5 7.5 0 01-7.5 7.5H5.5a7.478 7.478 0 01-.379-1.696M12 7v6m0 0v3m0-3l2 2m-2-2l-2 2" />
          </svg>
          <span className="text-xs">Profile</span>
        </div>
        <div className="flex flex-col items-center hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
          </svg>
          <span className="text-xs">Wishlist</span>
        </div>
        <div className="flex flex-col items-center hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1 14H4L3 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7h12M6 13h12m-1 3v1a3 3 0 11-6 0v-1M10 7a3 3 0 006 0" />
          </svg>
          <span className="text-xs">Bag</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
