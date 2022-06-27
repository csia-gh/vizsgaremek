const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    addressID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Customer', CustomerSchema);
