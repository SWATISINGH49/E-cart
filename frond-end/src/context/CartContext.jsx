import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const userId = 'swati'; // Replace with actual auth system later

  // 🛒 CART FUNCTIONS
  const fetchCart = async () => {
    const res = await axios.get(`http://localhost:5000/api/cart?userId=${userId}`);
    setCart(res.data);
  };

  useEffect(() => {
    fetchCart();
    fetchOrders();
  }, []);

  const addToCart = async (product) => {
    await axios.post(`http://localhost:5000/api/cart/add`, { ...product, userId });
    fetchCart();
  };

  const updateQuantity = async (id, quantity) => {
    await axios.put(`http://localhost:5000/api/cart/${id}?userId=${userId}`, { quantity });
    fetchCart();
  };

  const removeFromCart = async (id) => {
    await axios.delete(`http://localhost:5000/api/cart/${id}?userId=${userId}`);
    fetchCart();
  };

  const clearCart = async () => {
    await axios.delete(`http://localhost:5000/api/cart/clear/all?userId=${userId}`);
    fetchCart();
  };

  // 📦 ORDER FUNCTIONS
const placeOrder = async (product) => {
  try {
    await axios.post('http://localhost:5000/api/my-orders', {
      userId,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
      trackingNumber: product.trackingNumber,
    });
    // You can optionally refetch orders here or handle UI update
  } catch (error) {
    console.error('Failed to place order', error);
    throw error;
  }
};


  const fetchOrders = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/my-orders?userId=${userId}`);
      setOrders(res.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        placeOrder,
        orders,
        fetchOrders
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
