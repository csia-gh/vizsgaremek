const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[a-űA-Ű \-\.0-9]{5,100}$/.test(v);
        },
      },
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
