import React from 'react';
import ProductCard from './ProductCard';

const BeautyProducts = () => {
  const products = [
    {
      imageUrl: 'https://media.istockphoto.com/id/1494935138/photo/organic-cosmetics-with-ingredients.webp?a=1&b=1&s=612x612&w=0&k=20&c=YJI5PxXyuE86yIq03EaxWWGc8oB_juYkO0mPHTtVNFg=',
      title: 'Skin care',
      items: '09 items',
      description: 'Nourish and hydrate your skin with our premium selection.',
      price: '$29.99',
      rating: 4.5
    },
    {
      imageUrl: 'https://imgs.search.brave.com/f8sJ2ZRMJcY8-MZXPq4bBYIOttLfA4Pk194MJw26Qrw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/MDY2OTQyMy9waG90/by9tYWtldXAtYnJ1/c2gtYW5kLWRlY29y/YXRpdmUtY29zbWV0/aWNzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1DRUFjMHF5/NkVnMFhvbEFhVnlU/LU9UREd4cWt4bWw3/cmtCVlBuTWF3NE5F/PQ',
      title: 'Makeup',
      items: '12 items',
      description: 'Enhance your natural beauty with our curated makeup collection.',
      price: '$39.99',
      rating: 4.8
    },
    {
      imageUrl: 'https://imgs.search.brave.com/wBfVX-oQUTNo-nrN2g429Z7hE1BbsaJi4MTOZuv6vqI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnlyZGllLmNvbS90/aG1iL3V1djZ0VWto/U2VsUXJ1WTdnYUlJ/ZWhQWVBIOD0vZml0/LWluLzYwMHg2MDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCkvYmFyZW1pbmVy/YWxzLXNtb290aGlu/Zy1mb3VuZGF0aW9u/LWJydXNoLWhvdXJn/bGFzcy12YW5pc2gt/c2VhbWxlc3MtZmlu/aXNoLWxpcXVpZC1m/b3VuZGF0aW9uLXRh/bWFyYS1zdGFwbGVz/LTAyLmpwZy02M2U5/NjA3NDcwNjU0OWYz/YjY1ZDM4ODAxYWQ4/YTIyZS5qcGc',
      title: 'Beauty Brushes',
      items: '10 items',
      description: 'Precision tools for flawless makeup application.',
      price: '$19.99',
      rating: 4.7
    },
    {
      imageUrl: 'https://imgs.search.brave.com/Nq2NhX-ibmlvhYhTSGUO_wo5idqyBL2bKTlGm_7_w-E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC8xbnk0eW9p/eXJxaWEvNmZ4VE1n/TTlOZzB6ZTF6YkFH/SDR5SS9mMjQ2MzE0/MWQyNzM5YmM4OGNi/NGE5NWE3MDcwZjUy/Ni9zY2Fycy1hcHBs/eS1zdW5zY3JlZW4t/b3ZlcnZpZXcucG5n/P3c9NDUwJmg9MzAw',
      title: 'Face Care',
      items: '09 items',
      description: 'Revitalize your complexion with our face care essentials.',
      price: '$34.99',
      rating: 4.6
    },
    {
      imageUrl: 'https://imgs.search.brave.com/cwz7EZqxL_JPqNJZGUPHx21auhfItoEdUjNL50cfuHg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/ODUxMzI3OC9waG90/by9ibGFjay13b21h/bi1iZWF1dHktYW5k/LWhhaXItY2FyZS13/aXRoLXNlcnVtLWRy/b3BwZXItZm9yLXRy/ZWF0bWVudC1hbmQt/cmVwYWlyLWFnYWlu/c3QtYS1ncmV5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1t/aVFWbC11T3llUzJq/VjM0eE5McV9pUUFJ/LUNjYm05RnV5Ynhr/WE81NmhnPQ',
      title: 'Hair Care',
      items: '08 items',
      description: 'Transform your hair with our nourishing hair care products.',
      price: '$24.99',
      rating: 4.2
    },
    {
      imageUrl: 'https://imgs.search.brave.com/9GvpPEvy1ra60J1UjSWPcvkcfi8xIMDLoHOMqBpAi-M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ib3Ju/cHJldHR5LmNvbS9j/ZG4vc2hvcC9maWxl/cy8xX2NhZjE3NGZj/LTU0NGMtNGUxZS04/ZWJjLTBlNjI4M2U1/ZWVkMi5qcGc_dj0x/Njg0OTg4MTY4Jndp/ZHRoPTEwOTA',
      title: 'Nail Polish',
      items: '15 items',
      description: 'Color your nails with our vibrant nail polish range.',
      price: '$9.99',
      rating: 4.9
    },
    {
      imageUrl: 'https://imgs.search.brave.com/2z-lBRvP29SlUAMBspTOwHBJWmlcVsy_5TzhpSZ0PNw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzM5LzMyLzU0/LzM2MF9GXzQzOTMy/NTQwNF9SeVZXV2l4/QU9qODR2YWNPZTJv/RFJtY2hHQVhjVlZw/bi5qcGc',
      title: 'Perfumes',
      items: '07 items',
      description: 'Discover your signature scent with our luxury perfumes.',
      price: '$49.99',
      rating: 4.4
    },
    {
      imageUrl: 'https://imgs.search.brave.com/kD2x982qn3KnzpMFMOOE36I1k2CEOtREcji6NQXLhYA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9za2lu/YW5kY28uY29tL2Nk/bi9zaG9wL2ZpbGVz/L3NraW5fY28xNzc1/MDEuanBnP3Y9MTcx/OTY4ODkzNCZ3aWR0/aD0yNTAw',
      title: 'Body Lotion',
      items: '13 items',
      description: 'Moisturize and protect your skin with our body lotion.',
      price: '$19.99',
      rating: 4.1
    },
    {
      imageUrl: 'https://imgs.search.brave.com/DMYUGmdOkrL6JocEs8pL0bBY5rSTUxZmtXHZyo0QrTk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wYXBh/dHVpLmNvbS9jZG4v/c2hvcC9maWxlcy9z/a3VfUEFQNjJfYm9k/eWxvdGlvbl9zY2Vu/dF91bmNlbnRlZF9f/MDIuanBnP3Y9MTcw/ODk4NjQ3OSZ3aWR0/aD02MDA',
      title: 'Hand Cream',
      items: '06 items',
      description: 'Keep your hands soft and hydrated with our hand cream.',
      price: '$12.99',
      rating: 4.3
    },
    {
      imageUrl: 'https://imgs.search.brave.com/N_m_vCkmSNscahnVBXpdiG0-WHM88P4mdzg-AosGliE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTYz/MTEwNzM0L3Bob3Rv/L3JlZC1saXBzdGlj/ay1vcGVuLXR1YmUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZqQl9ucHpfT05N/aTkwWlM5X3N1aWtk/TFRLYVMwTENMV1JF/YUw3RTRxVms9',
      title: 'Lipstick',
      items: '10 items',
      description: 'Add a pop of color with our long-lasting lipsticks.',
      price: '$14.99',
      rating: 4.8
    },
    {
      imageUrl: 'https://imgs.search.brave.com/vv3CT4wf4dB0jV5-QbGyGhJYobQjYOs0z5wa7T2AUhs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9zaGVl/dC1tYXNrLTE2Mjc2/NDEwMTEuanBnP2Ny/b3A9MC41MDJ4dzox/LjAweGg7MC4yNTF4/dywwJnJlc2l6ZT02/NDA6Kg',
      title: 'Face Masks',
      items: '05 items',
      description: 'Pamper your skin with our refreshing face masks.',
      price: '$7.99',
      rating: 4.0
    },
    {
      imageUrl: 'https://imgs.search.brave.com/8N-v0lIaa8b44CU2oDbvHw-7kDZ4g3K2-6daZ4JvSsY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly95b3Vy/dGhlb3JpZS5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvMS5NYXJ1/bGEtT2lsLVNILUZy/b250LmpwZz92PTE2/Mjc2NzE0NTQmd2lk/dGg9NTMz',
      title: 'Shampoo',
      items: '11 items',
      description: 'Cleanse your hair with our nourishing shampoos.',
      price: '$11.99',
      rating: 4.2
    }
  ];



const sampleProducts = [
  {
    id: 1,
    name: 'Silk Saree',
    price: 2999,
    category: 'Clothes',
    image: 'https://images.unsplash.com/photo-1617055407123-3d7130c1f940?w=600&auto=format&fit=crop&q=60',
    description: 'Elegant silk saree with intricate designs perfect for special occasions.',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 1999,
    category: 'Clothes',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=60',
    description: 'Classic denim jacket offering style and durability for daily wear.',
    rating: 4.2
  },
  {
    id: 3,
    name: 'Lehenga',
    price: 4999,
    category: 'Clothes',
    image: 'https://images.unsplash.com/photo-1638457133838-50b704b2655c?w=600&auto=format&fit=crop&q=60',
    description: 'Traditional lehenga with vibrant colors and fine embroidery.',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Laptop',
    price: 11299,
    category: 'Accessories',
    image: 'https://plus.unsplash.com/premium_photo-1683736986779-987763ccc545?w=600&auto=format&fit=crop&q=60',
    description: 'High-performance laptop suited for both work and entertainment.',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Nothing',
    price: 20999,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1722929517020-69d5530e8c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Sleek and innovative accessory with cutting-edge features.',
    rating: 4.1
  },
  {
    id: 6,
    name: 'Western Gown',
    price: 3499,
    category: 'Clothes',
    image: 'https://images.unsplash.com/photo-1616986491129-3e37cb654c82?q=80&w=2070&auto=format&fit=crop',
    description: 'Stylish western gown perfect for parties and events.',
    rating: 4.4
  },
  {
    id: 7,
    name: 'Cake',
    price: 29,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Delicious and fresh cake baked to perfection.',
    rating: 4.9
  },
  {
    id: 9,
    name: 'Sweet Cake',
    price: 2599,
    category: 'Food',
    image: 'https://plus.unsplash.com/premium_photo-1663853494654-db53db5559c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN3ZWV0fGVufDB8fDB8fHww',
    description: 'Richly flavored sweet cake perfect for celebrations.',
    rating: 4.6
  },
  {
    id: 10,
    name: 'Dosa',
    price: 199,
    category: 'Food',
    image: 'https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Crispy and savory dosa made fresh daily.',
    rating: 4.7
  },
  {
    id: 11,
    name: 'Pizza',
    price: 99,
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGl6emF8ZW58MHx8MHx8fDA%3D',
    description: 'Hot and cheesy pizza with fresh toppings.',
    rating: 4.8
  },
  {
    id: 12,
    name: 'IPhone',
    price: 99999,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Latest model iPhone with powerful features.',
    rating: 4.9
  },
  {
    id: 13,
    name: 'Earbuds',
    price: 999,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Wireless earbuds with excellent sound quality.',
    rating: 4.3
  },
  {
    id: 14,
    name: 'Basmati Rice (5kg)',
    price: 549,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1646980990815-1e97d5ee932f?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Aromatic basmati rice with long grains, perfect for every meal.',
    rating: 4.5
  },
  {
    id: 15,
    name: 'Wheat Flour (10kg)',
    price: 399,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1586137712370-9b450509c587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2hlYXQlMjBGbG91cnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Fresh wheat flour ideal for all your baking needs.',
    rating: 4.4
  },
  {
    id: 16,
    name: 'Sunflower Oil (1L)',
    price: 120,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1bmZsb3dlciUyME9pbHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Pure sunflower oil suitable for healthy cooking.',
    rating: 4.3
  },
  {
    id: 17,
    name: 'Tur Dal (1kg)',
    price: 150,
    category: 'Grocery',
    image: 'https://plus.unsplash.com/premium_photo-1723726831918-9a8542e705cb?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'High-quality tur dal perfect for daily cooking.',
    rating: 4.6
  }
];




const categories = ['Clothes', 'Accessories', 'Food', 'Grocery'];

  return (
    // <div className="container mx-auto py-10 px-5">
    //   <h2 className="text-center text-3xl font-bold mb-6">2025 Top Collections</h2>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    //     {products.map((product, index) => (
    //       <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
    //         <div className="p-4 text-center">
    //           <h3 className="text-lg font-bold mb-2">{product.title}</h3>
    //           <p className="text-gray-500">{product.items}</p>
    //           <p className="text-gray-700">{product.description}</p>
    //           <p className="text-gray-900 font-bold">{product.price}</p>
    //           <p className="text-yellow-500">{`⭐ ${product.rating}`}</p>
    //         </div>
    //       </div>
    //     ))}
    
 
    //   </div>
    // </div>



<div className="container mx-auto py-10 px-5">
  <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 tracking-wide">
    ✨ 2025 Top Collections
  </h2>

  <div className="space-y-12">
    {categories.map((category) => (
      <div key={category}>
        <div className="flex justify-center">
          <h2 className="text-center text-3xl font-bold text-blue-700 bg-blue-100 inline-block px-5 py-1 rounded-full shadow-sm mb-6">
            {category}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleProducts
            .filter((product) => product.category === category)
            .map((product) => (
             
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default BeautyProducts;
