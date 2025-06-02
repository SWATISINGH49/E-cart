import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-300 rounded-full blur-md animate-ping"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 backdrop-blur-sm bg-black/20 p-8 lg:p-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Categories Column */}
            <div className="group">
              <h3 className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200 group-hover:from-pink-200 group-hover:to-white transition-all duration-300">
                CATEGORIES
              </h3>
              <ul className="space-y-3">
                {['Clothing & Fashion', 'Toys', 'Books & CDs', 'School Supplies', 'Birthday Party Supplies', 
                  'Baby Diapering', 'Feeding & Nursing', 'Bath & Skin Care', 'Health & Safety', 
                  'Baby Gear', 'Nursery', 'Moms & Maternity', 'Gifts'].map((item, index) => (
                  <li key={item} 
                      className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group/item"
                      style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover/item:scale-100 transition-transform duration-200 -z-10"></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* FirstCry Parenting Column */}
            <div className="group">
              <h3 className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 group-hover:from-purple-200 group-hover:to-white transition-all duration-300">
                FIRSTCRY_PARENTING
              </h3>
              <ul className="space-y-3">
                {['Getting Pregnant', 'Pregnancy', 'Baby', 'Toddler', 'Preschooler', 
                  'Big Kid', 'Vaccination', 'Growth Tracker', 'Baby Names', 
                  'FirstCry Parenting YouTube', 'Coloring Pages'].map((item, index) => (
                  <li key={item} 
                      className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group/item"
                      style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover/item:scale-100 transition-transform duration-200 -z-10"></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping & Policies Column */}
            <div className="group">
              <h3 className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 group-hover:from-indigo-200 group-hover:to-white transition-all duration-300">
                SHIPPING_&_POLICIES
              </h3>
              <ul className="space-y-3">
                {['Payments', 'Shipping Policy', 'Return & Replacement Policy', 
                  'Cancellation Policy', 'Terms of Use', 'Privacy Policy', 
                  'Next Day & Same Day Delivery', 'Responsible Disclosure'].map((item, index) => (
                  <li key={item} 
                      className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group/item"
                      style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover/item:scale-100 transition-transform duration-200 -z-10"></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Apps Column */}
            <div className="group">
              <h3 className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200 group-hover:from-teal-200 group-hover:to-white transition-all duration-300">
                OUR_APPS
              </h3>
              <ul className="space-y-3">
                {['FirstCry India: Shopping & Parenting', 'FirstCry India: Shopping & Parenting iOS', 
                  'Learning & Education', 'Intellikits', 'Intellitots'].map((item, index) => (
                  <li key={item} 
                      className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group/item"
                      style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover/item:scale-100 transition-transform duration-200 -z-10"></div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop International Column */}
            <div className="group">
              <h3 className="font-bold text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 group-hover:from-orange-200 group-hover:to-white transition-all duration-300">
                SHOP_INTERNATIONAL
              </h3>
              <ul className="space-y-3">
                {['FirstCry UAE', 'FirstCry KSA', 'FirstCry KSA (English)', 
                  'FirstCry Arabia: Shopping & Parenting'].map((item, index) => (
                  <li key={item} 
                      className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group/item"
                      style={{ animationDelay: `${index * 50}ms` }}>
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-md scale-0 group-hover/item:scale-100 transition-transform duration-200 -z-10"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>

          {/* Footer Bottom Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-sm">
            {['Shortlist', 'Quick Re-Order', 'Track Order', 
              'Become a Franchisee', 'Preschool Admissions'].map((item, index) => (
              <a key={item} 
                 href="#" 
                 className="relative group px-4 py-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
                 style={{ animationDelay: `${index * 100}ms` }}>
                <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-white/20">
            <p className="text-gray-300 text-sm">
              © 2025 ABC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;