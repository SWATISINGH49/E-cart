import React from 'react';

const cardData = [
  { id: 1, title: 'Leather Jacket', description: 'Stylish leather jacket for all occasions.', imageUrl: 'https://imgs.search.brave.com/Ecyr4ulYqF8LlN7HtaAJt7ssRgiiPBJUDmjEDH7TjQw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFkM2Z0SXZydkwu/anBn', rating: 4.5, price: 89.99, discount: 10, offer: '10% off' },
  { id: 2, title: 'Sneakers', description: 'Comfortable sneakers perfect for everyday wear.', imageUrl: 'https://imgs.search.brave.com/ojz62brdpwnkLIrBuh4ss3mmzFypVRtT6vdffq5_HSU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE5SlBaWnk0dUwu/anBn', rating: 4.0, price: 59.99, discount: 15, offer: '15% off' },
  { id: 3, title: 'Formal Shirt', description: 'Classic formal shirt for business meetings.', imageUrl: 'https://imgs.search.brave.com/xFFnw5cMujpifknxpQo3JSZ8EbnLW6jlHWt_ljq0lnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFwSjA5eXJ3cEwu/anBn', rating: 4.8, price: 39.99, discount: 5, offer: '5% off' },
  { id: 4, title: 'Wrist Watch', description: 'Elegant wrist watch for a sophisticated look.', imageUrl: 'https://imgs.search.brave.com/tt16siPnZqpXxNDWbJC6CaYZcivwb1CD2Ccpu6Bqxj0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aXRzaG90LmNvbS9w/cm9kdWN0LzQ1MHgv/aW1hZ2VzL21lbnMt/d2F0Y2gtcm9sZXgt/ZGF0ZWp1c3QtMzZt/bS1pY2VkLW91dC1y/b21hbi1kaWFsLXdp/dGgtcnViaWVzLWRp/YW1vbmQtYmV6ZWwt/czAwMDY4Ml8zNldI/SlVXSElURVJFRDIt/NENfMS5qcGc_dz0x', rating: 4.7, price: 149.99, discount: 20, offer: '20% off' },
  { id: 5, title: 'Backpack', description: 'Durable backpack for travel and daily use.', imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9bc362e1-1ecb-4f2d-9ffa-af01405d26fb/NK+UTILITY+ELITE+BKPK+-+2.0.png', rating: 4.2, price: 49.99, discount: 10, offer: '10% off' },
  { id: 6, title: 'Sunglasses', description: 'Stylish sunglasses to protect your eyes.', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgtNdFJWrqhP29ZeDkmtS8Inge0gLwIWG5bgS3gAep-RzPp8dj-7GEYNTseA23uWYaqZ0VYDCzGyxpptC5WyVWUN8xN52WJsA0BkknM7_1&usqp=CAE', rating: 4.6, price: 29.99, discount: 15, offer: '15% off' },
  { id: 7, title: 'Casual T-Shirt', description: 'Comfortable casual t-shirt for everyday wear.', imageUrl: 'https://imgs.search.brave.com/EmB4iZmqbP2EhVGjmKEM3k7ch4bD2zoj2Yj1lcEDjDA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMudm9ndWUuY29t/L3Bob3Rvcy82MmJk/ZTY4NjhmZTkxYmFl/ZjE3OWM0MGYvMzo0/L3dfNzQ4LGNfbGlt/aXQvc2xpZGVfMjAu/anBn', rating: 4.1, price: 19.99, discount: 5, offer: '5% off' },
  { id: 8, title: 'Running Shoes', description: 'Lightweight running shoes for athletes.', imageUrl: 'Running Shoes', rating: 4.9, price: 74.99, discount: 10, offer: '10% off' },
  { id: 9, title: 'Denim Jeans', description: 'Classic denim jeans for a timeless look.', imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhieCmoy6BPElq4icTCODx1Scj46VpMW2mVC_U2WFUHYjtac4dGQvJH8OxD3fOO4AZSTx3sy0L67CFJBEsGegvyVlex8DT831ho132uyFygTkADMJ79tyR&usqp=CAE', rating: 4.4, price: 59.99, discount: 15, offer: '15% off' },
  { id: 10, title: 'Winter Coat', description: 'Warm winter coat for cold weather.', imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEwgnoicyhRizq3nl2zXjxmVIsdhEi90yJIchSBvkIP4IMFUCZVEB7a4NeCHLjGe9uJYBshSIL-TnnCDhbrfZh7HsHDBKRclzjC9WJECQ8283lh-Ph5sLhig&usqp=CAE', rating: 4.3, price: 99.99, discount: 20, offer: '20% off' },
  { id: 11, title: 'Sports Cap', description: 'Trendy cap for outdoor activities.', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQI_IG4uCpTlAwKLwLDyMxDYU0mp7pEIAAu_LRlz5g8VAoRfOy5-tYgyCET6R8nEF9uzCc3E5Il8VJB-j6zIfDG5uqYycWpi5N4y3OnOMel&usqp=CAE', rating: 4.8, price: 24.99, discount: 5, offer: '5% off' },
  { id: 12, title: 'Sweatshirt', description: 'Cozy sweatshirt for casual outings.', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwUxY8Bs8-Nks0CS6ZSIrra1qBenhure3BlYwXI3Yj-C0xGCMPXSCQ5BkI7SURDSHgcLCPpCeJtFp158CfRkAA3S1zeIg6Rr3QsMsQXT2eSsZKmPP_L7RT&usqp=CAE', rating: 4.6, price: 34.99, discount: 10, offer: '10% off' },
  { id: 13, title: 'Belt', description: 'Stylish belt to complement your outfit.', imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVtSLpNUSsvzXBEWZ1DgWrb91F2mQycEE0LD-aT0k6gwP88vS7x-p_rQzKDiBp32YFuktAwcSq5wDJPGStEb5fkThuh0VGKJGjf3WArNwZnbNPbzCS95ZwFw&usqp=CAE', rating: 4.5, price: 19.99, discount: 15, offer: '15% off' },
  { id: 14, title: 'Cargo Shorts', description: 'Versatile cargo shorts for summer wear.', imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgqAMRxLIrjb8CNb0rbmoRA6ZSFKwSNkWYGM0YX-HpqLQVu_J0_zBOURB6qRlYuYN8ylmAYHBDmUKDXW45h7L9SjNMN6XxSQu62Vz9XhToiphOJyTp82SAEQ&usqp=CAE', rating: 4.7, price: 39.99, discount: 5, offer: '5% off' },
  { id: 15, title: 'Graphic Tee', description: 'Cool graphic tee for a laid-back look.', imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbxMMsxKAgWqd8UTeNKNpDIaY4hoqnDn8iPtqQ3wjyBFWrshe6F-lUD3AUdPVtShxVeus6eQCW6OZmnQfI5S_bSdmi7mJ9LhaVys_TFIgk&usqp=CAE', rating: 4.9, price: 29.99, discount: 20, offer: '20% off' },
  { id: 16, title: 'Flip Flops', description: 'Comfortable flip flops for beach days.', imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSSsET1Ndp_BiKoX09zjd1KaX59FAoCQmdnydR6BCo3W1I93hHoW99yXx6mugnRGLCl9BebHe6zPHQ4O3GVL6FhVnf-tNJ6qUxYzZlGbxClLgT0dogWI5UE&usqp=CAE', rating: 4.3, price: 14.99, discount: 10, offer: '10% off' },
];

function Men() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {cardData.map(card => (
        <div key={card.id} className="border p-4 rounded shadow">
          <img src={card.imageUrl} alt={card.title} className="w-full h-32 object-cover rounded" />
          <h3 className="font-bold text-lg mt-2">{card.title}</h3>
          <p className="mt-1">{card.description}</p>
          <p className="mt-1">Rating: {card.rating} ★</p>
          <p className="mt-1">Price: ${card.price.toFixed(2)}</p>
          <p className="mt-1 text-red-500">{card.offer} (Discount: ${((card.price * card.discount) / 100).toFixed(2)})</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default Men;
