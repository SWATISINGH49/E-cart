import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRating from './StarRating';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-600"> <StarRating rating={product.rating} /> {product.rating}</p>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">₹{product.price}</p>
       <div className="flex justify-end mt-4">
  <button
    onClick={handleAddToCart}
    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full transition flex items-center space-x-2"
  >
    <ShoppingCart className="w-5 h-5" />
    <span>Add to Cart</span>
  </button>
</div>

      </div>
    </div>
  );
};


export default ProductCard;
