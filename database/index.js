const mongoose = require('mongoose');
const MONGODB_URL = require('./mongoose');
const db = require('./mongoose');


const similarProductsSchema = mongoose.Schema({
  id: {
    type: Number,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: Buffer,
    trim: true,
    required: true
  },
  url: {
    type: String,
    trim: true,
    required: true
    },
  reviewScore: {
    type: Number,
    trim: true,
    required: true
    },
  membersOnly: {
    type: Number,
    trim: true,
    default: false,
  },
  price: {
    type: Number,
    trim: true,
    required: true
  }

});


let similarProducts = mongoose.model('SimilarProducts', similarProductsSchema);



module.exports.similarProducts = similarProducts;


