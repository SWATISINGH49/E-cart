import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const BeautyProducts = () => {
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
      title: 'Hydrating Face Serum',
      category: 'Skin Care',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.8,
      reviews: 156,
      discount: 25
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
      title: 'Matte Lipstick Set',
      category: 'Makeup',
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.6,
      reviews: 243,
      discount: 23
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
      title: 'Professional Brush Kit',
      category: 'Beauty Brushes',
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.9,
      reviews: 89,
      discount: 28
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop',
      title: 'Anti-Aging Night Cream',
      category: 'Face Care',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 312,
      discount: 25
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=300&h=300&fit=crop',
      title: 'Keratin Hair Treatment',
      category: 'Hair Care',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 198,
      discount: 20
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
      title: 'Luxury Nail Polish Collection',
      category: 'Nail Polish',
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 167,
      discount: 30
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
      title: 'Signature Perfume',
      category: 'Perfumes',
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 445,
      discount: 24
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      title: 'Moisturizing Body Lotion',
      category: 'Body Lotion',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 278,
      discount: 29
    }
  ];

  const toggleWishlist = (productId) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Beauty Store</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Heart className="w-6 h-6 text-gray-600" />
              {wishlist.size > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.size}
                </span>
              )}
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {getTotalCartItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalCartItems()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Premium Beauty Collection</h2>
          <p className="text-gray-600">Discover our curated selection of luxury beauty products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    -{product.discount}%
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
                    wishlist.has(product.id)
                      ? 'bg-pink-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${wishlist.has(product.id) ? 'fill-current' : ''}`} />
                </button>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
            <h3 className="font-semibold mb-2">Cart Summary</h3>
            <div className="space-y-1 mb-3 max-h-32 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="truncate mr-2">{item.title}</span>
                  <span>${(item.price * item.quantity).toFixed(2)} (x{item.quantity})</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeautyProducts;