import React from 'react';

function AccessoriesSection() {
  const accessories = [
    { id: 1, image: 'https://imgs.search.brave.com/Ux7V1hPjp34FYutYcoNzcjkJIjIiHc1SQeYb3-0SwCE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFybUU5LUhSMUwu/anBn', title: 'Chic Bracelet', price: '99', description: 'A stylish bracelet that complements any outfit.', rating: 4.5, offer: '10% off' },
    { id: 2, image: 'https://imgs.search.brave.com/xP0LBY4p0utTH-2FeC8eChO9APtna9olB28EoOhjHaI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kaTJw/b252MHY1b3R3LmNs/b3VkZnJvbnQubmV0/L3Bvc3RzLzIwMjQv/MDkvMDcvNjZkY2Fj/NDlkMzk5ZmZjN2Fj/NjliZWVhL3NfNjZk/Y2FjYmExNDJhZDQw/MmFhZWRiOTA2Lmpw/Zw', title: 'Elegant Necklace', price: '129', description: 'A stunning necklace that adds a touch of elegance to any outfit.', rating: 4.7, offer: '15% off' },
    { id: 3, image: 'https://imgs.search.brave.com/VUWVn73F8VCoIltvd0I5kZWvJYL0Z7RtRlmyLRzgOXU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQyNjg5OTIzL2Mv/Mjg4NC8yODg0LzEx/MC8xMTYvaWwvZjRm/NzA5LzU2MTE3NDU1/NTUvaWxfNjAweDYw/MC41NjExNzQ1NTU1/X3B0bjAuanBn', title: 'Stylish Watch', price: '149', description: 'A classic watch that combines functionality with style.', rating: 4.3, offer: '20% off' },
    { id: 4, image: 'https://imgs.search.brave.com/geWCCPSDgv-RyEIaAUbqqsy5leHtHgbsnIVAozmUWz4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFVQzVUa1hpeEwu/anBn', title: 'Fashionable Hat', price: '199', description: 'Stay trendy with this fashionable hat suitable for all seasons.', rating: 4.6, offer: '5% off' },
    { id: 5, image: 'https://imgs.search.brave.com/oTDxvC1Sj8GD32UyhQOXkqV9DaSUAy1t5xXmC8oCj38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzErc1lLaDNIVkwu/anBn', title: 'Trendy Sunglasses', price: '159', description: 'Protect your eyes in style with these trendy sunglasses.', rating: 4.8, offer: '30% off' },
    { id: 6, image: 'https://imgs.search.brave.com/APHfmnYdigFhGRA3z5AECFzCWx0MEpftHnETrMODLow/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE2NTUzMTQ3L3Iv/aWwvZTRlOTQ2LzMz/NTY5NDE1NDYvaWxf/NjAweDYwMC4zMzU2/OTQxNTQ2XzdoZTIu/anBn', title: 'Colorful Scarf', price: '89', description: 'Add a splash of color to your outfit with this cozy scarf.', rating: 4.4, offer: 'No offer' },
    { id: 7, image: 'https://imgs.search.brave.com/CZoZx_pDEHcZINIO1EDDbccS_UGGlyUwjyuHNQB3DQA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF6ZDdiWWY3ekwu/anBn', title: 'Chic Belt', price: '179', description: 'A chic belt that can elevate any outfit.', rating: 4.1, offer: '10% off' },
    { id: 8, image: 'https://imgs.search.brave.com/Eb6h3AUN0St5EhWM6MF9ir178N857MB4-5hfUyf1zS4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFhaFUtT3RROEwu/anBn', title: 'Statement Earrings', price: '99', description: 'Make a statement with these bold and beautiful earrings.', rating: 4.9, offer: '25% off' },
    { id: 9, image: 'https://imgs.search.brave.com/phghCOhgQ8rdKPDZAZqmsx8BnjYev1FFyCOvrHhxJbg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFRMVBNQTczSUwu/anBn', title: 'Elegant Brooch', price: '139', description: 'Add elegance to your attire with this beautiful brooch.', rating: 4.2, offer: '15% off' },
    { id: 10, image: 'https://imgs.search.brave.com/yMvBvBkTQal3v0VfjHutwiqWY7PTaC44qn1GaEkoyK0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bWVkaWEuZ2xhbWly/YS5jb20vbWVkaWEv/cHJvZHVjdC9uZXdn/ZW5lcmF0aW9uL3Zp/ZXcvMy9za3UvZ2xh/bW9yb3VzLWdsb3ct/bWVuL2FsbG95Y29s/b3VyL3JlZC93aWR0/aC93OC5qcGc_d2lk/dGg9NTE2JmhlaWdo/dD01MTY', title: 'Glamorous Ring', price: '199', description: 'A glamorous ring that shines and captivates.', rating: 4.6, offer: '20% off' },
    { id: 11, image: 'https://imgs.search.brave.com/I6lE_-EbA23bSNoz6Q2Q6jCzWnqGolW2b9jIqPvEPBM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFyLVVUOG1hbUwu/anBn', title: 'Luxury Handbag', price: '299', description: 'A luxurious handbag that adds flair to any look.', rating: 4.8, offer: '30% off' },
    { id: 12, image: 'https://imgs.search.brave.com/UFnNPpC0bQIeeGFvj8so8qm-SLzGk31DgMU85Q2h3MM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkL2I2/Lzk5L2NkYjY5OWI5/ZjljMGJhODgwMTc2/NThhN2NmM2Q5MmMz/LS1sYWNlLXVwLWhl/ZWxzLWhpZ2gtaGVl/bHMuanBn', title: 'Stylish Footwear', price: '249', description: 'Trendy footwear perfect for any occasion.', rating: 4.7, offer: '15% off' },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Chic Accessories Collection</h1>
        <p className="text-lg text-gray-500">Elevate your style with our curated accessories collection. Perfect for any outfit! | Starts @ 89</p>
      </div>

      {/* Circle Card Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {accessories.map((item) => (
          <div key={item.id} className="w-1/5 px-2">
            <div className="relative text-center">
              {/* Circle Image */}
              <div className="w-full h-40 bg-white rounded-full shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title and Price */}
              <p className="mt-4 text-gray-700 font-semibold">
                {item.title} | Starts @ {item.price}
              </p>
              {/* Description */}
              <p className="mt-2 text-gray-500">{item.description}</p>
              {/* Rating */}
              <p className="mt-1 text-yellow-500">Rating: {item.rating} ★</p>
              {/* Offer */}
              <p className="mt-1 text-green-500">{item.offer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccessoriesSection;
