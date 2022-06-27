const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema(
  {
    zip: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Address', AddressSchema);
