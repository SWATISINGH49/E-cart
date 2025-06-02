import React from 'react';

function BrandShowcase() {
  const brands = [
    { name: 'Puma', image: 'https://imgs.search.brave.com/Y7yccE1sMxJ-yYo1CwqHPT2S0BSF-ny8XqNNTSSX3RY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L1BVTUEtTG9nby0y/MDA4Mi01MDB4MzMz/LmpwZw' },
    { name: 'Levi\'s', image: 'https://imgs.search.brave.com/ZTLQ2CR7Z08sZSRNKa7GfIjuIbM7Q_B6kzNUYvyfh1o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGlnaHNub2JpZXR5/LmNvbS9zdGF0aWMt/YXNzZXRzL2RhdG8v/MTY4MTg5NTY2OC1s/ZXZpcy1sb2dvLWhp/c3RvcnktMDIuanBn' },
    { name: 'Nike', image: 'https://imgs.search.brave.com/iB_ZjpuqjKNJ6MlICWGWUeGqX_zlT1XWZtOrqzmIDbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGVtcGxhdGUu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA5LzE1MTUw/NzU5L0NyZWF0aXZl/LUZyZWUtTmlrZS1T/cGxhc2gtTG9nby5q/cGc' },
    { name: 'Adidas', image: 'https://imgs.search.brave.com/tFCl9co4GUg-spamiF4CralxUBJxaXBVJi9bOlo6Gus/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvaW1hZ2UvdXBs/b2FkL3YxNjcwNDQ1/MDQwL2xvZ2FzdGVy/L2xvZ2FzdGVyLTIw/MjAtMDMtdGhlLTV0/aC1sb2dvLnBuZw' },
    { name: 'Reebok', image: 'https://imgs.search.brave.com/zFu3xGlrPP7wgPLzS5E8ToNLy4vb9PbgOi0fFrwEjho/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1tYXJxdWVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNy9SZWVib2st/TG9nby0xOTg2Lmpw/Zw' },
    { name: 'Under Armour', image: 'https://imgs.search.brave.com/qKIwOYsLL_ch6dSp9PCE4Jsw2DkKRUJU4TTcwBF-efo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMjAt/MDgtdC1hcm1vci1h/Z2dyZXNpdmUtbG9n/by0yLmpwZw' },
    { name: 'H&M', image: 'https://imgs.search.brave.com/BbadV62ljX_sYC8iAFRKLVHePQA2DEkuZ1a9m-kMXSI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQ1LzE4LzY1/LzM2MF9GXzc0NTE4/NjU5N19jVkdZdExa/b3czZm1Pb3hxQ3Qy/eVJUZTE3bG5yNkd5/SS5qcGc' },
    { name: 'Zara', image: 'https://imgs.search.brave.com/6DzCzbX05FzR163eUZPQyu9PBqZ-VqEC9UTVcmZPy3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmRh/Zm9udGZyZWUuY28v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDgvWmFyYS1Mb2dv/LUZvbnQtMS1zY2Fs/ZWQuanBnP3Jlc2l6/ZT0yNTYwLDE3MDYm/c3NsPTE' },
    { name: 'Gap', image: 'https://imgs.search.brave.com/AouMDkgYApoeBY2JcFlmhTt_hNQOZRJwGwrwmlKJJCw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L3N0YXRpYy9zeXMt/aW1hZ2VzL01lZGlh/L1BpeC9waWN0dXJl/cy8yMDEwLzEwLzEy/LzEyODY4Nzk5OTU5/ODUvR2Fwcy1uZXct/bG9nby0wMDYuanBn/P3dpZHRoPTQ2NSZk/cHI9MSZzPW5vbmU' },
    { name: 'Calvin Klein', image: 'https://imgs.search.brave.com/wH5EGIzjvOnsR1CaJeltDjkVQj42PuVbSfb0rnchO94/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0ZvbnQtb2YtdGhl/LUNhbHZpbi1LbGVp/bi1Mb2dvLTUwMHgz/NzUuanBn' }
  ];

  return (
    <div className="my-10">
      <h2 className="text-center text-2xl font-bold mb-6">Our Featured Brands</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center border p-4 shadow-lg rounded-lg">
            <img src={brand.image} alt={brand.name} className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandShowcase;
