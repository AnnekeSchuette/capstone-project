const mongoose = require('mongoose')

const WineSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    imageUrl: {
      type: String,
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
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Wine', WineSchema, 'stored_wines')
