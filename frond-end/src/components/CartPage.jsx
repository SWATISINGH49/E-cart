import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );
    const { placeOrder } = useContext(CartContext); 
  
  const [modalData, setModalData] = useState(null);
  const [toast, setToast] = useState(null); // toast message or null

  const handleUpdate = (id) => {
    updateQuantity(id, quantities[id]);
  };

  const handleInputChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) });
  };


  const generateTrackingNumber = () => {
    return 'FK' + Math.floor(1000000000 + Math.random() * 9000000000);
  };


  // Automatically update context cart when local quantity changes
  useEffect(() => {
    for (const id in quantities) {
      updateQuantity(parseInt(id), quantities[id]);
    }
  }, [quantities]);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


const handleConfirmPurchase = async () => {
  try {
    // Assuming placeOrder expects an order object
    await placeOrder(modalData);  // Send only the current modal product
    setModalData(null); // close modal
    
    // Optionally remove this item from the cart after purchase
    removeFromCart(modalData.id);
  } catch (error) {
    console.error('Error placing order:', error);
  }
};


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <p className="text-gray-700 font-medium">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                   <div className="mt-2 flex items-center gap-2">
  <button
    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
    onClick={() =>
      setQuantities((prev) => ({
        ...prev,
        [item.id]: Math.max(1, prev[item.id] - 1),
      }))
    }
  >
    ➖
  </button>
  <span className="w-8 text-center">{quantities[item.id]}</span>
  <button
    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
    onClick={() =>
      setQuantities((prev) => ({
        ...prev,
        [item.id]: prev[item.id] + 1,
      }))
    }
  >
    ➕
  </button>
  <button
    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
    onClick={() =>
      setModalData({
        ...item,
        trackingNumber: generateTrackingNumber(),
      })
    }
  >
    Buy Now
  </button>
</div>

                  </div>
                </div>

                <button
                  className="text-red-500 text-lg hover:text-red-700 mt-4 md:mt-0"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              onClick={() => setModalData(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">Order Details</h3>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={modalData.image}
                alt={modalData.name}
                className="h-20 w-20 rounded object-cover"
              />
              <div>
                <p className="font-semibold">{modalData.name}</p>
                <p>Price: ₹{modalData.price}</p>
                <p>Quantity: {modalData.quantity}</p>
                <p className="font-semibold mt-2">
                  Total: ₹{modalData.price * modalData.quantity}
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              Your tracking number: <span className="font-mono">{modalData.trackingNumber}</span>
            </p>
            <button
              className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              onClick={handleConfirmPurchase}
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 animate-fade-in">
          {toast}
        </div>
      )}
      
      {/* Add a simple fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default CartPage;
