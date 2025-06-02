const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  quantity: { type: Number, default: 1 },
  image: String,
  userId: { type: String, default: 'guest' },
  trackingNumber: String,
  orderedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
