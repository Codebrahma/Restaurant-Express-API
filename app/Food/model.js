const mongoose = require('mongoose');

const Food = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    require: true,
    type: String,
  },
});

module.exports = mongoose.model('Food', Food);