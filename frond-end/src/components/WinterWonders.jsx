import React from 'react';

const winterProducts = [
  {
    id: 1,
    title: 'Cozy Knit Sweater',
    price: 'Starts @ 129',
    image: 'https://imgs.search.brave.com/8HbyCZ-dv8BhUUI98fySnxaFRfsrn13xSmURi-RoEC8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjErenczc2UzeEwu/anBn',
    description: 'A soft and warm sweater perfect for chilly evenings.',
    material: '100% Acrylic',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Puffer Jacket',
    price: 'Starts @ 239',
    image: 'https://imgs.search.brave.com/zvXYspDEjgPAbAKhDxGP07dVrTO4AFWXSxx8CSFGADQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFGNm1TNXprT0wu/anBn',
    description: 'Stay warm with this lightweight yet insulated puffer jacket.',
    material: 'Polyester Shell, Down Filling',
    sizes: ['M', 'L', 'XL'],
    rating: 4.0,
  },
  {
    id: 3,
    title: 'Thermal Leggings',
    price: 'Starts @ 165',
    image: 'https://imgs.search.brave.com/9w2z0C3v4F6wDcX7Of06j84aZ8MBXDoCPD_6DvxhmlA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFqOVZPSGMwMEwu/anBn',
    description: 'Ultra-soft thermal leggings to keep you cozy all day.',
    material: '92% Polyester, 8% Spandex',
    sizes: ['S', 'M', 'L'],
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Woolen Scarf',
    price: 'Starts @ 45',
    image: 'https://imgs.search.brave.com/j_-_zBmpYFIZdBISRdZniFsj89VTHs-xyRdFcQZpBmQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFLYVM0Mkk4ZEwu/anBn',
    description: 'Add style and warmth with this luxurious woolen scarf.',
    material: '100% Wool',
    sizes: ['One Size'],
    rating: 4.8,
  },
  {
    id: 5,
    title: 'Fleece-Lined Gloves',
    price: 'Starts @ 35',
    image: 'https://imgs.search.brave.com/7N7kj751lzWnvWsHvsLCwTIxa8H0SA296Vfn7L9d8Dk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9weXhp/cy5ueW1hZy5jb20v/djEvaW1ncy9jMzMv/MzBkLzM1ZmViNTI5/ZmY1ZDFjMTA2ODhi/Y2ZmY2I5MzViMzcw/MGMucnNxdWFyZS53/NjAwLmpwZw',
    description: 'Keep your hands warm with these cozy fleece-lined gloves.',
    material: 'Polyester, Fleece Lining',
    sizes: ['S', 'M', 'L'],
    rating: 4.3,
  },
  {
    id: 6,
    title: 'Insulated Boots',
    price: 'Starts @ 359',
    image: 'https://imgs.search.brave.com/r9KRmXpwueREOSxXoAmW1GiZKO0cuSbtNJ1ryf6deaI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFpUGsxenJVMUwu/anBn',
    description: 'Durable insulated boots designed for snow and ice.',
    material: 'Waterproof Leather, Insulated Lining',
    sizes: ['8', '9', '10', '11'],
    rating: 4.6,
  },
  {
    id: 7,
    title: 'Cable Knit Beanie',
    price: 'Starts @ 29',
    image: 'https://imgs.search.brave.com/WhVnTlqK0EV58lAla677u2qgaT6G0JkvWcpDsIQIITg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFleEduSm1BYUwu/anBn',
    description: 'Keep your head warm with this stylish cable knit beanie.',
    material: '100% Acrylic',
    sizes: ['One Size'],
    rating: 4.5,
  },
  {
    id: 8,
    title: 'Puffer Vest',
    price: 'Starts @ 199',
    image: 'https://imgs.search.brave.com/lWOl68qMOybmMDqSBwllLU8mZnDVxiP5biqeZZBrRSw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bnV1ZHMuY29tL2Nk/bi9zaG9wL2ZpbGVz/L05VRDcyM19XLTA4/M19QdWZmZXItVmVz/dF9Cb25lX09NX0Zy/b250X0Nyb3BfMS5q/cGc_dj0xNzAxMTky/NzMzJndpZHRoPTEx/MDA',
    description: 'Layer up with this trendy puffer vest for added warmth.',
    material: '100% Nylon, Insulated Filling',
    sizes: ['S', 'M', 'L'],
    rating: 4.2,
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    );
  }
  return stars;
};

function WinterWonders() {
  return (
    <div className="bg-blue-50 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-700">WINTER WONDERS</h1>
        <p className="text-lg text-gray-500">Essential Warmth, Endless Style</p>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {winterProducts.map((product) => (
          <div key={product.id} className="relative text-center border border-gray-200 rounded-lg p-4 bg-white shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-full mb-4"
            />
            <h2 className="font-bold text-lg text-gray-800">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 text-gray-700">{product.price}</p>

            {/* Rating */}
            <div className="mt-1">{renderStars(product.rating)}</div>

            {/* Sizes as Circles */}
            <div className="mt-4 flex justify-center space-x-2">
              {product.sizes.map((size) => (
                <span key={size} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm text-gray-600">
                  {size}
                </span>
              ))}
            </div>

            {/* Additional Details */}
            <div className="mt-4 text-left">
              <p className="text-sm text-gray-600"><strong>Material:</strong> {product.material}</p>
            </div>

            {/* Footer Button */}
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded transition hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WinterWonders;
