import React from 'react';

function OccasionWear() {
  return (
    <div className="bg-gray-50 p-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">
          Make Every <span className="text-orange-500">OUTFIT COUNT</span>
        </h1>
        <p className="text-gray-600">Celebrate in our Exceptional Occasion Wear</p>
        <h2 className="text-2xl font-bold text-orange-500 mt-2">Starts @ 299</h2>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Image */}
        <div className="relative">
          <img 
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//autumn24_desktop_def_130824_34.jpg" 
            alt="Occasion Wear - Left" 
            className="w-full h-full object-cover rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Right Image */}
        <div className="relative">
          <img 
            src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//autumn24_desktop_def_130824_34.jpg" 
            alt="Occasion Wear - Right" 
            className="w-full h-full object-cover rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
}

export default OccasionWear;
