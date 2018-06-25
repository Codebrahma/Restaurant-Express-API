const mongoose = require('mongoose');

const Orders = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: {
    type: 'Array',
    require: true,
  },
  totalCost: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Orders', Orders);