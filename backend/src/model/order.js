const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema(
  {
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    status: {
      type: String,
      enum: ['new', 'shipped', 'paid'],
      default: 'new',
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Order', OrderSchema);
