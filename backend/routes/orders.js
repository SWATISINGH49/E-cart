const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// 🔸 POST: Save a new order
router.post('/', async (req, res) => {
  try {
    const orderData = req.body;

    const newOrder = new Order(orderData);
    await newOrder.save();

    res.status(201).json({ message: 'Order saved', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error saving order', error });
  }
});

// 🔹 GET: Fetch all orders for a user
router.get('/', async (req, res) => {
  const userId = req.query.userId || 'guest';

  try {
    const orders = await Order.find({ userId }).sort({ orderedAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
});

module.exports = router;
