import React from 'react';

const SportswearCards = () => {
  const items = [
    {
      name: 'Athleisure Top',
      description: 'Comfortable, breathable, and perfect for daily workouts.',
      price: '₹799',
      offer: '20% Off',
      rating: 4.5,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI52-r7NL5Tb_nA9PtFvQw_nxypCYNjuRwDQ&s'
    },
    {
      name: 'Sports Shorts',
      description: 'High-performance shorts designed for maximum comfort.',
      price: '₹499',
      offer: '10% Off',
      rating: 4.0,
      imgUrl: 'data:image/jpeg;base64,/9j/4AAQSk...'
    },
    {
      name: 'Training Shoes',
      description: 'Lightweight and durable shoes for intense workouts.',
      price: '₹1499',
      offer: '15% Off',
      rating: 4.7,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lWNjP8nKmfpI4eYFXNmKgLWf3WfJCNALbQ&s'
    },
    {
      name: 'Fitness Tracker',
      description: 'Track your workouts and monitor your health metrics.',
      price: '₹2999',
      offer: '5% Off',
      rating: 4.3,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXGHNwl8RA1TUEf3VqqL_Wtx35rkSyIl34A&s'
    },
    // Add more items as needed
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Sportswear Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={item.imgUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-gray-800">{item.price}</span>
                <span className="text-sm text-green-500">{item.offer}</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 text-sm mr-1">★</span>
                <span className="text-sm text-gray-600">{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportswearCards;
