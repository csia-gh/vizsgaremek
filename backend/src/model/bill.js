const mongoose = require('mongoose');

const BillSchema = mongoose.Schema(
  {
    orderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['new', 'paid'],
      default: 'new',
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Bill', BillSchema);
