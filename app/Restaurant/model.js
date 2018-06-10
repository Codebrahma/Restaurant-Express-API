const mongoose = require('mongoose');

const Restaurant = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  foods: [{
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food',
    },
    price: {
      type: Number,
    },
    active: {
      type: Boolean,
    },
  }]
});

module.exports = mongoose.model('Restaurant', Restaurant);