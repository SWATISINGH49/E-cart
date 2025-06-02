const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add product to cart
router.post('/add', async (req, res) => {
  const { id, name, price, image, userId = 'guest' } = req.body;

  try {
    const existingItem = await Cart.findOne({ id, userId });

    if (existingItem) {
      // If item exists, increase quantity
      existingItem.quantity += 1;
      await existingItem.save();
      return res.status(200).json({ message: 'Quantity updated', item: existingItem });
    }

    const newItem = new Cart({ id, name, price, image, userId });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart', item: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
});

router.get('/', async (req, res) => {
  const userId = req.query.userId;

  try {
    const query = userId ? { userId } : {};
    const cartItems = await Cart.find(query);
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error });
  }
});


// Delete item from cart
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = req.query.userId || 'guest';

  try {
    await Cart.findOneAndDelete({ id, userId });
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing item', error });
  }
});

// Update quantity of an item
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const userId = req.query.userId || 'guest';

  try {
    const updatedItem = await Cart.findOneAndUpdate(
      { id, userId },
      { quantity },
      { new: true }
    );
    res.status(200).json({ message: 'Quantity updated', item: updatedItem });
  } catch (error) {
    res.status(500).json({ message: 'Error updating quantity', error });
  }
});

// Clear all items from the cart
router.delete('/clear/all', async (req, res) => {
  const userId = req.query.userId || 'guest';

  try {
    await Cart.deleteMany({ userId });
    res.status(200).json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error });
  }
});

module.exports = router;
