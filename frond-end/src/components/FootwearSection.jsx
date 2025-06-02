import React from 'react';

function FootwearSection() {
  const footwear = [
    {
      id: 1,
      image: 'https://imgs.search.brave.com/z8cd73STcEgPGjDG00e7DQVr55zMVrlkhXhQw45BGYo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFVVNUSEU4U0wu/anBn',
      title: 'Casual Sneakers',
      price: 299,
      offerPrice: 149,
      discount: 50,
    },
    {
      id: 2,
      image: 'https://imgs.search.brave.com/4Uu2f8TIgUG1HgcgBW5RQU--24kiiPQYckvnZMdO5AU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaGdy/dWhyLmItY2RuLm5l/dC9tZWRpYS81Mi80/OC85Zi8xNzA3NDQy/OTk4LzA1MTI0Ni0x/LmpwZz93aWR0aD0z/MDAw',
      title: 'Stylish Loafers',
      price: 399,
      offerPrice: 199,
      discount: 50,
    },
    {
      id: 3,
      image: 'https://imgs.search.brave.com/i4hbvXEDbEvL6gs_1LfFzg03I9lmImEHVj5URxoxza4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9reGFk/bWluLm1ldHJvc2hv/ZXMuY29tL3Byb2R1/Y3QvMzEtMjExLzU1/MC8zMS0yMTFNMTEu/anBn',
      title: 'Formal Shoes',
      price: 499,
      offerPrice: 249,
      discount: 50,
    },
    {
      id: 4,
      image: 'https://imgs.search.brave.com/qmn0h6o7uENLhdxSMPd3Qc0vnADTG7tBPpuMDNdSASA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzA5LzgzLzYz/LzM2MF9GXzgwOTgz/NjM4Ml9VZkV6OWU1/OHNJSk16WFJndjdX/RG9yb1E0RFdLd05K/Ui5qcGc',
      title: 'Running Shoes',
      price: 599,
      offerPrice: 299,
      discount: 50,
    },
    {
      id: 5,
      image: 'https://imgs.search.brave.com/rYKVxPcesKHohSR09uJP2CuuQlEuEPPhTV107YAm5Ro/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFOUWFSZU1YV0wu/anBn',
      title: 'Ankle Boots',
      price: 699,
      offerPrice: 349,
      discount: 50,
    },
    {
      id: 6,
      image: 'https://imgs.search.brave.com/gNby829W_FWzyJakKLl_-eUFZr0ds0qV7bjGqzGO7AE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wYWlyLWZsaXAt/ZmxvcHNfMTAxOTQy/OS0xODY2NS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw',
      title: 'Flip Flops',
      price: 199,
      offerPrice: 99,
      discount: 50,
    },
    // New Footwear Items
    {
      id: 7,
      image: 'https://imgs.search.brave.com/5-YyqXAihJ58bU7VP4q1gb6Ob1Nje_jDx9Ccd0kupHk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFrSDV1MVBpRUwu/anBn',
      title: 'Beach Sandals',
      price: 149,
      offerPrice: 79,
      discount: 47,
    },
    {
      id: 8,
      image: 'https://imgs.search.brave.com/iT2gau06eoW_PJBO_1WR1yvOmlWmo00x3xfw1ki7S8g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90YWZ0/Y2xvdGhpbmcuY29t/L2Nkbi9zaG9wL2Zp/bGVzL0hULVJBUElE/Ty1XSElURURVQ0tf/VEFGVDIuanBnP3Y9/MTY5OTM5MDQzMSZ3/aWR0aD0yNTAw',
      title: 'High-Top Sneakers',
      price: 399,
      offerPrice: 199,
      discount: 50,
    },
    {
      id: 9,
      image: 'https://imgs.search.brave.com/CHU3lTyAYOD8OG3gC_mHnbntwlheOQKjT_lflej-lwA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcy/OTg4MzU2L3Bob3Rv/L2hpa2luZy1zaG9l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MU5CdmxJS195/c3BXeHQzZG9YNXY1/LWp1Sy1OMDZpOHJQ/alBGaDRjVktNST0',
      title: 'Waterproof Hiking Boots',
      price: 799,
      offerPrice: 399,
      discount: 50,
    },
    {
      id: 10,
      image: 'https://imgs.search.brave.com/kFFBSGfiu5ySv24SVVpFFXuSnl5OxUI9PnqXfp98Qu0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVja2V0dHNpbW9u/b24uY29tL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L2NvbG9yX2Jyb3du/XzFfZHVuaGFtX2Rl/cmJ5X3B1bGxfdXAu/anBnP3Y9MTYxODMz/MDU1OSZ3aWR0aD17/d2lkdGh9',
      title: 'Classic Derby Shoes',
      price: 899,
      offerPrice: 449,
      discount: 50,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Walk in Your Shoes</h1>
        <p className="text-lg text-gray-500">Step into fashionable footwear | Starts @ 149</p>
      </div>

      {/* Footwear Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {footwear.map((item) => (
          <div key={item.id} className="relative text-center w-48">
            {/* Footwear Image */}
            <div className="w-full h-48 bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Price and Title */}
            <p className="mt-4 text-gray-700 font-semibold">{item.title}</p>
            <p className="text-gray-500 line-through">₹ {item.price}</p>
            <p className="text-red-500 font-semibold">Offer Price: ₹ {item.offerPrice}</p>
            <p className="text-green-500 font-bold">{item.discount}% Off</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FootwearSection;
