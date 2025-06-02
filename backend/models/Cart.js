const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  quantity: {
    type: Number,
    default: 1
  },
  userId: {
    type: String, // For user-based cart support
    default: 'guest'
  }
});

module.exports = mongoose.model('Cart', cartSchema);
