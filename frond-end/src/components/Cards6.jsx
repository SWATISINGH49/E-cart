import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Eye, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';




const productData = [
  {
    id: 1,
    title: 'Premium Cotton Tops & Tees',
    originalPrice: 149,
    salePrice: 119,
    image: 'https://imgs.search.brave.com/NgFfA53aYvzIkE5plMfSMzMyvVB6ARS3piT1zbgS9Gs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI0NjEyMDkwL2Mv/MTM2OS8xMzY5LzMx/NS8xMTUvaWwvNmVj/ZTMxLzU5NTE2NzYz/OTEvaWxfNjAweDYw/MC41OTUxNjc2Mzkx/X2FxYTUuanBn',
    description: 'Stylish and comfortable tops made from premium cotton blend. Perfect for casual outings and everyday wear.',
    rating: 4.5,
    reviews: 128,
    discount: 20,
    inStock: 45,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    category: 'Tops',
    brand: 'StyleCraft'
  },
  {
    id: 2,
    title: 'Designer Bottoms Collection',
    originalPrice: 129,
    salePrice: 109,
    image: 'https://imgs.search.brave.com/fWISZyMTTPj5MnXS7GNBv5arQEY1ENXm-DT3rPI57H0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEuY2Fsdmlua2xl/aW4uY29tL2ltYWdl/cy8yMDI0MDMwN19t/aXNjL1BMUF9WaXN1/YWxfTmF2L1dvbWVu/X0JvdHRvbXNfUGFu/dHNfMnguanBn',
    description: 'Versatile bottoms crafted for comfort and style. Features premium fabric and modern tailoring.',
    rating: 4.3,
    reviews: 89,
    discount: 15,
    inStock: 32,
    sizes: ['24', '26', '28', '30', '32', '34'],
    colors: ['Black', 'Khaki', 'Denim', 'Brown'],
    category: 'Bottoms',
    brand: 'UrbanFit'
  },
  {
    id: 3,
    title: 'Luxury Loungewear Set',
    originalPrice: 149,
    salePrice: 129,
    image: 'https://imgs.search.brave.com/A3_csPBfoVogk3BfGOJr7mAGFyy_M-ofeSwxUsdCBws/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NjYwMTljMDEyNjZj/MDRhMTlmMmRjY2E4/L21hc3Rlci93XzEy/ODAsY19saW1pdC9S/b290cy1MdXhlLUNy/ZXctU3dlYXRlci1h/bmQtUGludHVjay1Q/YW50LWluLWNvZmZl/ZS1saXF1ZXVyLmpw/Zw',
    description: 'Ultra-soft loungewear perfect for relaxing at home. Made with sustainable bamboo-cotton blend.',
    rating: 4.7,
    reviews: 203,
    discount: 10,
    inStock: 18,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Coffee', 'Cream', 'Rose', 'Sage'],
    category: 'Loungewear',
    brand: 'ComfortZone'
  },
  {
    id: 4,
    title: 'Elegant Evening Dresses',
    originalPrice: 219,
    salePrice: 160,
    image: 'https://imgs.search.brave.com/X6hxfuF1Vx3vYvRN5--czQAWJ4yEfYttvHQTIQmYihI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDE4NzE1Ny9waG90/by9yZWQtZHJlc3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVpYeHE3aU8wczhj/d2h0cVZIME5IaE5Q/cmgyRUp4a0lZNGNV/WFJic3Nmd1U9',
    description: 'Stunning evening dresses for special occasions. Premium fabric with elegant design and perfect fit.',
    rating: 4.8,
    reviews: 156,
    discount: 25,
    inStock: 8,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Black', 'Navy', 'Emerald'],
    category: 'Dresses',
    brand: 'Glamour'
  },
  {
    id: 5,
    title: 'Classic Formal Shirt',
    originalPrice: 209,
    salePrice: 199,
    image: 'https://imgs.search.brave.com/m8wYN4XEw5103-fKXtuavH5iDZMlyIoVOTH4ttJtKlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg4/MTYwMDQxL3Bob3Rv/L21lbnMtc2hpcnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXhWWmpLQVVKZWNJ/cFljX2ZLUnpfRUI4/SHVSbVhDT09QT3Ra/LVNUNmVGdlE9',
    description: 'Professional dress shirt with superior quality fabric. Perfect for business meetings and formal events.',
    rating: 4.6,
    reviews: 94,
    discount: 5,
    inStock: 67,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink', 'Gray'],
    category: 'Shirts',
    brand: 'Executive'
  },
  {
    id: 6,
    title: 'Premium Sets & Suits',
    originalPrice: 299,
    salePrice: 209,
    image: 'https://imgs.search.brave.com/HcLr_RCH9OL7MU5HMkuo6LCU3mGj26FMH_h0HMTaTSM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXNtYWdhemluZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDkvbWF0Y2hp/bmctc2V0LmpwZz93/PTMwMCZoPTMwMCZj/cm9wPTEmcXVhbGl0/eT04NiZzdHJpcD1h/bGw',
    description: 'Coordinated sets and suits for professional and casual wear. Tailored fit with modern styling.',
    rating: 4.4,
    reviews: 76,
    discount: 30,
    inStock: 12,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Beige', 'Black'],
    category: 'Sets',
    brand: 'PowerSuit'
  },
  {
    id: 7,
    title: 'Trendy Light Layers',
    originalPrice: 175,
    salePrice: 149,
    image: 'https://imgs.search.brave.com/yMEK__ZwESoGil8qQpFAgXAkmp71FE3Ew-IFrIsgjoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlcmlx/aHRoYWlyc3R5bGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8xMi84LWxv/bmctaGFpcmN1dC13/aXRoLWFuZ2xlZC1s/YXllcnMuanBnP3c9/NTAwJnNzbD0x',
    description: 'Versatile light layers perfect for transitional weather. Soft fabric with contemporary design.',
    rating: 4.2,
    reviews: 112,
    discount: 15,
    inStock: 29,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Dusty Pink', 'Sage', 'Lavender'],
    category: 'Outerwear',
    brand: 'LayerUp'
  },
  {
    id: 8,
    title: 'Traditional Designer Kurti',
    originalPrice: 185,
    salePrice: 149,
    image: 'https://imgs.search.brave.com/mlKAE6grP-Esup0XJXKo5tLQPPXJm7xy94rNPAILio4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92aW50/YWdlaW5kaWFueWMu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL3Bpbmtn/aGFyYXJhMzguanBn/P3Y9MTY5ODI5MDMz/NiZ3aWR0aD0yMDAw',
    description: 'Beautiful traditional Kurti with modern cuts. Handcrafted details and comfortable fit for any occasion.',
    rating: 4.6,
    reviews: 87,
    discount: 20,
    inStock: 23,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Pink', 'Blue', 'Green', 'Yellow'],
    category: 'Ethnic',
    brand: 'Heritage'
  }
];

function ProfessionalShoppingCards() {
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});
    const navigate = useNavigate();

  const handleOpenAddProduct = () => {
    navigate('/add-product');
  };

  const addToCart = (productId) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getCartQuantity = (productId) => cart[productId] || 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Fashion Collection</h1>
        <p className="text-gray-600">Discover our curated selection of high-quality fashion items</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productData.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {product.discount}% OFF
                  </div>
                )}
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart 
                    className={`w-5 h-5 ${wishlist[product.id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                  />
                </button>
                
                {/* Quick View */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-opacity duration-300 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Brand & Category */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.brand}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                </div>

                {/* Product Title */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-gray-900">₹{product.salePrice}</span>
                  {product.originalPrice > product.salePrice && (
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                </div>

                {/* Size Selection */}
                <div className="mb-3">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Size:</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedSize[product.id] || ''}
                    onChange={(e) => setSelectedSize(prev => ({ ...prev, [product.id]: e.target.value }))}
                  >
                    <option value="">Select Size</option>
                    {product.sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                {/* Color Selection */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Color:</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedColor[product.id] || ''}
                    onChange={(e) => setSelectedColor(prev => ({ ...prev, [product.id]: e.target.value }))}
                  >
                    <option value="">Select Color</option>
                    {product.colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  <span className={`text-sm font-medium ${product.inStock > 10 ? 'text-green-600' : product.inStock > 0 ? 'text-orange-600' : 'text-red-600'}`}>
                    {product.inStock > 10 ? 'In Stock' : product.inStock > 0 ? `Only ${product.inStock} left` : 'Out of Stock'}
                  </span>
                </div>
                 <button onClick={handleOpenAddProduct}>
        Add New Product
      </button>

                {/* Add to Cart Section */}
                {getCartQuantity(product.id) === 0 ? (
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={product.inStock === 0}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium text-lg">{getCartQuantity(product.id)}</span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-600">In Cart</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      {Object.keys(cart).length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm">
          <h3 className="font-semibold text-gray-900 mb-2">Cart Summary</h3>
          <div className="space-y-1 mb-3">
            {Object.entries(cart).map(([productId, quantity]) => {
              const product = productData.find(p => p.id === parseInt(productId));
              return (
                <div key={productId} className="flex justify-between text-sm">
                  <span>{product?.title.slice(0, 20)}...</span>
                  <span>{quantity} × ₹{product?.salePrice}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>
                ₹{Object.entries(cart).reduce((total, [productId, quantity]) => {
                  const product = productData.find(p => p.id === parseInt(productId));
                  return total + (product?.salePrice || 0) * quantity;
                }, 0)}
              </span>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg mt-3 transition-colors">
              Checkout ({Object.values(cart).reduce((a, b) => a + b, 0)} items)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfessionalShoppingCards;