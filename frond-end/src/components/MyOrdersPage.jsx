import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const MyOrdersPage = () => {
  const { orders, fetchOrders } = useContext(CartContext);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-lg">No orders yet.</p>
      ) : (
        <div className="grid gap-8 w-full max-w-5xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col p-6"
            >
              <div className="flex items-center space-x-6 mb-5">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0 shadow"
                />
                <div className="flex-grow">
                  <p className="text-lg font-semibold text-gray-900">{order.name}</p>
                  <p className="text-gray-600 mt-1">Quantity: <span className="font-medium">{order.quantity}</span></p>
                  <p className="text-blue-600 font-bold mt-2 text-xl">₹{order.price * order.quantity}</p>
                </div>
              </div>

              <div className="mt-auto text-right">
                <p className="text-gray-500 text-sm">Tracking Number:</p>
                <p className="font-mono text-gray-800 select-all">{order.trackingNumber}</p>
                <p className="text-gray-400 text-xs mt-2 italic">
                  Ordered: {new Date(order.orderedAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
