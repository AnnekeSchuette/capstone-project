const mongoose = require('mongoose')

const WineSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: 0,
    },
    description: {
      type: String,
      default: 0,
    },
    price: {
      type: String,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    link: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Wine', WineSchema, 'stored_wines')
