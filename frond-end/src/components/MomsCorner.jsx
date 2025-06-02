import React from 'react';

const FashionCorner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-green-300 p-8 rounded-lg">
      <div className="text-center mb-4">
        <h1 className="text-white text-4xl font-bold">FASHION CORNER</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Item 1 */}
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/Cg18FCYYLibcRc77uP5WUDjVWxpM916mCm1gS4QNt5Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pdHNt/aWxsYS5jb20vY2Ru/L3Nob3AvcHJvZHVj/dHMvTWlsbGFub3Zh/XzI1XzJfMWEzMWIx/YjktNzNiYy00MmI3/LWI5NWItODFkZDE0/NzY4OGM0LTkyMzg4/MF8xMDI0eC5qcGc_/dj0xNjg3NTM5MTky"
            alt="Dress 1"
            className="rounded-lg"
          />
          <div className="mt-2">
            <p className="text-white text-lg font-semibold">Floral Dress</p>
            <p className="text-white text-sm">⭐⭐⭐⭐ (4.5/5)</p>
            <p className="text-white text-sm">"Stylish and comfortable. Perfect for summer."</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/FXgRlOwMAx4eA7OnI8EeZs06dH9Cq1yHIX46LGUDF_k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5obS5jb20vYXNz/ZXRzL2htLzZmL2U0/LzZmZTQ4MTBiNTBj/NjljMGFiNDU5ZWM5/MmYwZDQzMTgxNDM1/MzcwMWEuanBnP2lt/d2lkdGg9MTUzNg"
            alt="Dress 2"
            className="rounded-lg"
          />
          <div className="mt-2">
            <p className="text-white text-lg font-semibold">Casual Top</p>
            <p className="text-white text-sm">⭐⭐⭐⭐⭐ (5/5)</p>
            <p className="text-white text-sm">"Superb quality and fits perfectly."</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/HhkiO1j20GuO16TVXMR0zJtrMoZY4T8TN98Nz9yDouI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGVsbG9tb2xseS5j/b20vY2RuL3Nob3Av/ZmlsZXMvMzlBMTY1/NF8xNzI2MTk5MTky/XzhjNWMzZjRiLTAw/MDktNDY2Ni04MmFh/LTA3MDdiNDM0MWFi/NF81MjB4LmpwZz92/PTE3MjYyNzkyNDI"
            alt="Dress 3"
            className="rounded-lg"
          />
          <div className="mt-2">
            <p className="text-white text-lg font-semibold">Maxi Dress</p>
            <p className="text-white text-sm">⭐⭐⭐⭐ (4.0/5)</p>
            <p className="text-white text-sm">"Great color and design. Slightly long."</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-white text-3xl font-semibold">Starts @</p>
        <p className="text-white text-5xl font-bold">₹999</p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white text-lg font-bold rounded-lg">
          View All
        </button>
      </div>
    </div>

    
  );
};

export default FashionCorner;
