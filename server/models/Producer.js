const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProducerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  farmData: {
    size: Number, // em hectares
    description: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Producer', ProducerSchema);
