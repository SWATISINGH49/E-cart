import React from 'react';

// Dummy data for card details
const productData = [
  {
    title: 'Sarees',
    originalPrice: 2000,
    discountPrice: 1500,
    discount: '25% OFF',
    rating: 4.5,
    imageUrl: 'https://imgs.search.brave.com/Gcd7ReLtkiloNNHib-dLEwmhhgX3fHEm5H7gAWmPWDQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFPV0d3UGpqSUwu/anBn',
  },
  {
    title: 'Lehenga Cholis',
    originalPrice: 5000,
    discountPrice: 3500,
    discount: '30% OFF',
    rating: 4.7,
    imageUrl: 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-lehenga-in-navy-blue-v1-lcc3272.jpg',
  },
  {
    title: 'Anarkali Suits',
    originalPrice: 3000,
    discountPrice: 2400,
    discount: '20% OFF',
    rating: 4.3,
    imageUrl: 'https://imgs.search.brave.com/8o-s_-ZqpFtfgWfyAt2sIC_xgiw-WlIS92_dR3--TLg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFMRWdGYVJUTkwu/anBn',
  },
  {
    title: 'Palazzo Sets',
    originalPrice: 1500,
    discountPrice: 1200,
    discount: '20% OFF',
    rating: 4.0,
    imageUrl: 'https://imgs.search.brave.com/A5pSHk090fyzU3x3E3auRhHwDeKwZe1yPkJp6emsfvA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGliYXMuaW4vY2Ru/L3Nob3AvcHJvZHVj/dHMvcGluay1wcmlu/dGVkLWNvdHRvbi1z/dHJhaWdodC1rdXJ0/YS13aXRoLXBhbGF6/em9zLWFuZC1kdXBh/dHRhLWxpYmFzLTEt/Mjc3NjcxOTQzNTM4/MTQuanBnP3Y9MTcx/MzUyMjk1OSZ3aWR0/aD0xMDgw',
  },
  {
    title: 'Kurtis',
    originalPrice: 1200,
    discountPrice: 1000,
    discount: '17% OFF',
    rating: 4.2,
    imageUrl: 'https://imgs.search.brave.com/Dlcr8hZF0KOjXEt3Rjl4NPhCdSmBG9io_riQuOYfZDo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFyeWxEMHllM0wu/anBn',
  },
  {
    title: 'Sharara Sets',
    originalPrice: 2500,
    discountPrice: 2000,
    discount: '20% OFF',
    rating: 4.6,
    imageUrl: 'https://imgs.search.brave.com/3fW28hzCcvf-tFErQPjU3_WwPcFuhPNLS_6QQWIRUtk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hYmhp/bmF2bWlzaHJhb2Zm/aWNpYWwuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzFfZTg0MmViZGIt/MDliMi00YjRmLWI5/YTktYmU1NjE1M2Iw/YTE1XzYwMHguanBn/P3Y9MTY5MjE4NjUy/Mw',
  },
  {
    title: 'Patiala Suits',
    originalPrice: 1800,
    discountPrice: 1500,
    discount: '16% OFF',
    rating: 4.4,
    imageUrl: 'https://imgs.search.brave.com/xEKeHEVvFC1mz1iruiU9M7K9WCBFwmHEuvNkl4PAx9E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMyLmFuZGFhemZh/c2hpb24uY29tL21l/ZGlhL2NhdGFsb2cv/cHJvZHVjdC9jYWNo/ZS8xL2ltYWdlLzUw/MHg3NTAvYTEyNzgx/YTdmMmNjYjNkNjYz/ZjdmZDAxZTFiZDJl/NGUvbC9zL2xzdHYw/MjUwOS5qcGctbmV3/XzEuanBn',
  },
  {
    title: 'Churidar Suits',
    originalPrice: 2200,
    discountPrice: 1800,
    discount: '18% OFF',
    rating: 4.5,
    imageUrl: 'https://imgs.search.brave.com/cBmHHt6N4NL66G5pOxvdALKiIgmGE60W50uvMs-5pqc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFHemgxS3phZkwu/anBn',
  },
  {
    title: 'Kaftans',
    originalPrice: 1300,
    discountPrice: 1050,
    discount: '19% OFF',
    rating: 4.1,
    imageUrl: 'https://imgs.search.brave.com/QkDpQ795FNSb4Si6kKMga_Afj5Z3UOQOPW6Pb_YwUa4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5va2hpdXNhLmNv/bS9jZG4vc2hvcC9m/aWxlcy90cmlsbGl1/bV9rYWZ0YW5fMTNf/N2U2MWJmODMtMzYx/NC00NjE1LWEyNjct/ZDk1YzZlZmUzNDhi/XzI4MHhAMnguanBn/P3Y9MTcwNzI0ODY1/OQ',
  },
  {
    title: 'Indo Western Gowns',
    originalPrice: 4500,
    discountPrice: 3600,
    discount: '20% OFF',
    rating: 4.8,
    imageUrl: 'https://imgs.search.brave.com/XZ2cFpHCwJjA1n1GntnCVB9W4a6tlpjZgXVHNcGlyoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFZOE5zWENCQkwu/anBn',
  },
  {
    title: 'Dhoti Pants',
    originalPrice: 1000,
    discountPrice: 800,
    discount: '20% OFF',
    rating: 4.0,
    imageUrl: 'https://imgs.search.brave.com/4YaCbKw4pUPGn-Oz-TBox3MnEbXDZWbQRck30yGVFj8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nb2Nv/bG9ycy5jb20vY2Ru/L3Nob3AvZmlsZXMv/QmxhY2tfYzk1YzY3/YTYtZDY0OS00MjQ2/LWFkOTMtODFhYTQ0/ZWViNmFkXzU0MHgu/anBnP3Y9MTcxMzE4/MzY5Mw',
  },
  {
    title: 'Salwar Suits',
    originalPrice: 2000,
    discountPrice: 1600,
    discount: '20% OFF',
    rating: 4.6,
    imageUrl: 'https://imgs.search.brave.com/XvfdJTOyQgxz09W-WxlmJDflnxFkQjfA79Dv-Sh_MBg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6anJpMVYtU0wu/anBn',
  },
  {
    title: 'Blouses',
    originalPrice: 800,
    discountPrice: 640,
    discount: '20% OFF',
    rating: 4.3,
    imageUrl: 'https://imgs.search.brave.com/AJ_zi9wDQ6Dl356NZorWydLvIbddP0vP-ygbGKOKQ28/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htL2ZmLzNh/L2ZmM2FiM2EzYmEw/YWU3NGEzNzM2Yjk1/NTVmZjBiZGVlZDE1/Nzc1NjguanBnP2lt/d2lkdGg9MTUzNg',
  },
  {
    title: 'Dupattas',
    originalPrice: 600,
    discountPrice: 500,
    discount: '17% OFF',
    rating: 4.4,
    imageUrl: 'https://imgs.search.brave.com/RyelEO2z5Lsox-rHLOMxoXD9WmTbNxXfVSh2X-DPCc8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFybGVlbmthdXIu/dXMvY2RuL3Nob3Av/cHJvZHVjdHMvVkVM/TEFHb2xkYW5kQmxh/Y2tEdXBhdHRhLmpw/Zz92PTE2NjkwNzUy/ODcmd2lkdGg9MTIw/MA',
  },
  {
    title: 'Petticoats',
    originalPrice: 500,
    discountPrice: 450,
    discount: '10% OFF',
    rating: 4.0,
    imageUrl: 'https://imgs.search.brave.com/hc9wppgRPLaHcgkckbWdrUxbpngDhDkkcm8NDHe6fTk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFXZVEyWmlIeEwu/anBn',
  },
  {
    title: 'Banarasi Sarees',
    originalPrice: 3500,
    discountPrice: 2800,
    discount: '20% OFF',
    rating: 4.7,
    imageUrl: 'https://imgs.search.brave.com/MuvC_bPLLmYOTeJ4b_RHakv3ZCX5Xxf2RBcJhgktE4E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEzODFCajV4Rkwu/anBn',
  },
];

function WomenEthnic() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {productData.map((product, index) => (
        <div
          key={index}
          className="bg-white m-4 p-4 w-64 shadow-lg rounded-lg flex flex-col border border-gray-200 hover:shadow-xl"
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

export default WomenEthnic;
