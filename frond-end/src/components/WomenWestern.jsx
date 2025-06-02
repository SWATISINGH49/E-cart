import React from 'react';

const productData = [
  {
    title: 'Dresses',
    originalPrice: 1800,
    discountPrice: 1200,
    discount: '33% OFF',
    rating: 4.3,
    imageUrl: 'https://imgs.search.brave.com/fi7kKNlW3ENae_gMRnPGGfllyBfVh7ie1BJGGr6DDNg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2hpdGVob3VzZWJs/YWNrbWFya2V0LmNv/bS9fYXNzZXRzL2Nt/cy92My9hc3NldHMv/Ymx0NmFkMTM5ZjRm/ZTE4YTE1Yi9ibHQ3/NmUxYjZlZmM3ZGI4/MDMyLzY2Y2Y2YWUz/ZTQ5ZjU1N2ZkMWVl/Yjk1Zi8zLmpwZz9p/bXdpZHRoPTM4NDAm/cXVhbGl0eT04MA',
  },
  {
    title: 'Tops & Tees',
    originalPrice: 900,
    discountPrice: 600,
    discount: '30% OFF',
    rating: 4.0,
    imageUrl: 'https://imgs.search.brave.com/UlkLDxBbAJwJy5fXtk49LRAH4V4vjuttW2PSuuqfr0Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM1Njc5ODAzL3Iv/aWwvMmEwNDk0LzU4/ODMwNjEzNDEvaWxf/NjAweDYwMC41ODgz/MDYxMzQxXzh3dTAu/anBn',
  },
  {
    title: 'Jeans',
    originalPrice: 2000,
    discountPrice: 1500,
    discount: '25% OFF',
    rating: 4.6,
    imageUrl: 'https://imgs.search.brave.com/VJmfCd2Nhl4yxkUZ8_NGwPVkB6Gy73dVBRRFpLb0EHk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FtaWNpc3NpbWEu/dXMvbWVkaWEvY2F0/YWxvZy9wcm9kdWN0/L2EvYS9hYUNKSk5T/SVBCRzBQMjEyMV9X/SElURV8wLmpwZz9x/dWFsaXR5PTgwJmJn/LWNvbG9yPTI1NSwy/NTUsMjU1JmZpdD1i/b3VuZHMmaGVpZ2h0/PTU1OCZ3aWR0aD00/NTAmY2FudmFzPTQ1/MDo1NTg',
  },
  {
    title: 'Skirts',
    originalPrice: 1200,
    discountPrice: 800,
    discount: '33% OFF',
    rating: 4.2,
    imageUrl: 'https://imgs.search.brave.com/RQPBm2lPqE4wG62e76_0GFkbK58xWF9ZpjefOw6ZFFw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmV3bW9kYS5jb20v/Y2RuL3Nob3AvZmls/ZXMvVDI0V1NLRzAz/NTFKX0JMS0ZUXzNf/anNfMGY3OTczMGYt/OTRhNS00ZTNjLTll/YWEtZTcxZTkwMDM1/YzgyXzUzM3gucG5n/P3Y9MTcyMTg5NzA3/Mg',
  },
  {
    title: 'Blazers',
    originalPrice: 2500,
    discountPrice: 2000,
    discount: '20% OFF',
    rating: 4.8,
    imageUrl: 'https://imgs.search.brave.com/qKccY5wV9aU_a78DYVzh_v_cWccXXfspl0GrnSS6SCE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htL2RlL2Rk/L2RlZGRlOGRkMzk4/MjdmNWE1MmZjYzFj/MDRkZWE2OGRmM2Zj/NTJiZmMuanBnP2lt/d2lkdGg9MTUzNg',
  },
  {
    title: 'Jackets',
    originalPrice: 3000,
    discountPrice: 2400,
    discount: '20% OFF',
    rating: 4.7,
    imageUrl: 'https://imgs.search.brave.com/vXuqNIMskEaBRhIuD6RToIteAb-8m4ASGWCb7lk8REQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFRcVI4T0E1TFMu/anBn',
  },
  {
    title: 'Palazzos',
    originalPrice: 1600,
    discountPrice: 1100,
    discount: '31% OFF',
    rating: 4.5,
    imageUrl: 'https://imgs.search.brave.com/_eEI4C2OUicFpxUvc1--eihOHfaO9hKO82zjlmBcOdo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEyNHJTR3F3dUwu/anBn',
  },
  {
    title: 'Jumpsuits',
    originalPrice: 2200,
    discountPrice: 1600,
    discount: '27% OFF',
    rating: 4.4,
    imageUrl: 'https://imgs.search.brave.com/cZ_QJMEQTClFK5MKMW7iB1hXd-ie0y9QhWqR_e8bR6M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFNV1lGNk4wekwu/anBn',
  },
  {
    title: 'Shorts',
    originalPrice: 1000,
    discountPrice: 700,
    discount: '30% OFF',
    rating: 4.3,
    imageUrl: 'https://imgs.search.brave.com/XuKDxyYHWn4rTMK24WTIIH4QRQtLJnh4bCXkyDWmvpU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFvRjBrSWExLUwu/anBn',
  },
  {
    title: 'Tank Tops',
    originalPrice: 800,
    discountPrice: 600,
    discount: '25% OFF',
    rating: 4.1,
    imageUrl: 'https://imgs.search.brave.com/37lNR66GrCo0KjQ8E3XfUmjJbiuQB0UzNwh72TeBujo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FwZmFjdG9yeS5j/b20vd2ViY29udGVu/dC8wMDI4Lzg1NS8z/NDUvY24yODg1NTM0/NS5qcGc',
  },
  {
    title: 'Leggings',
    originalPrice: 1200,
    discountPrice: 900,
    discount: '25% OFF',
    rating: 4.4,
    imageUrl: 'https://imgs.search.brave.com/Rii2JaRrfiajaAbTVaxfldYgm3e4TEmYBTYiKpBNfZI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zcGly/aXR1YWxnYW5nc3Rl/ci5jb20vY2RuL3No/b3AvZmlsZXMvU1U0/MzY3NzAwMV9BQ0xf/NzExMy5qcGc_dj0x/NzE0NTIwNjg3Jndp/ZHRoPTQ4MA',
  },
  {
    title: 'Crop Tops',
    originalPrice: 1000,
    discountPrice: 750,
    discount: '25% OFF',
    rating: 4.5,
    imageUrl: 'https://imgs.search.brave.com/PnVFtzTiY9ofYYju0vTGzUiZ2hl00bDKXhMpG6Wm8qM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFtTUhWT2JBbUwu/anBn',
  },
  {
    title: 'Dungarees',
    originalPrice: 2500,
    discountPrice: 1800,
    discount: '28% OFF',
    rating: 4.7,
    imageUrl: 'https://imgs.search.brave.com/4gjpsbxXL_udvFREml3fcJuvquDidfEfh9XF1tDHBFU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy1yNGY2/aGFvYXV4L2ltYWdl/cy9zdGVuY2lsLzUw/MHg2NTkvcHJvZHVj/dHMvMTg2LzIyMTMv/NDMwLTQ1LXBlcmZv/cm1hbmNlLWNvbWZv/cnQtZGVuaW0tZHVu/Z2FyZWUtaW5kaWdv/LWJsdWUtS0VZLW1v/ZGVsLWZyb250X185/MzM4NS4xNjYwOTE2/MDI4LmpwZz9jPTE',
  },
  {
    title: 'Tunics',
    originalPrice: 1400,
    discountPrice: 1000,
    discount: '28% OFF',
    rating: 4.6,
    imageUrl: 'https://imgs.search.brave.com/b2CsiLbcptCdZYdazg6Ld-wzI8aHkqdhLL5XrejRXvY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hpY29zLmNvbS9Q/cm9kdWN0X0ltYWdl/cy81NzAzNjkyMTJl/eHQ0LmpwZz9pbWdQ/b2xpY3k9cHJvZHVj/dE1lZA',
  },
  {
    title: 'Shrugs',
    originalPrice: 1600,
    discountPrice: 1200,
    discount: '25% OFF',
    rating: 4.4,
    imageUrl: 'https://imgs.search.brave.com/n06glkk8MnLE-qSb9TCRWPjRaIv8ZAnUNN_OwiK2NMU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODEwTWNoUUZsR0wu/anBn',
  },
  {
    title: 'Casual Trousers',
    originalPrice: 2200,
    discountPrice: 1650,
    discount: '25% OFF',
    rating: 4.5,
    imageUrl: 'https://imgs.search.brave.com/rMs32p7bKgSNKv4pZT5zRp8EynS_bhUytIDd1Nt_6yQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFwRitmYTN0d0wu/anBn',
  },
];

function WomenWestern() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {productData.map((product, index) => (
        <div
          key={index}
          className="bg-white m-4 p-4 w-64 shadow-lg rounded-lg flex flex-col border border-gray-200 hover:shadow-xl relative"
        >
          {/* Discount label */}
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full absolute top-2 right-2">
            {product.discount}
          </span>

          {/* Product image */}
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-32 object-cover mb-4 rounded-lg"
          />

          {/* Product title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((star, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < Math.floor(product.rating) ? 'gold' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.032a1 1 0 00.95.69h7.454c.967 0 1.371 1.24.588 1.81l-6.035 4.339a1 1 0 00-.364 1.118l2.287 7.031c.3.921-.755 1.688-1.539 1.117l-6.036-4.339a1 1 0 00-1.175 0l-6.036 4.339c-.784.571-1.839-.196-1.539-1.117l2.286-7.031a1 1 0 00-.364-1.118L.707 12.46c-.783-.57-.38-1.81.588-1.81h7.454a1 1 0 00.95-.69l2.286-7.032z"
                />
              </svg>
            ))}
            <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
          </div>

          {/* Price */}
          <div className="flex items-center">
            <span className="text-lg font-semibold text-green-600">₹{product.discountPrice}</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WomenWestern;
