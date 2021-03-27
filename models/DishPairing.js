const mongoose = require('mongoose')

const DishPairingSchema = new mongoose.Schema(
  {
    wine_type: {
      type: String,
    },
    text: {
      type: String,
    },
    pairings: [String],
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('DishPairing', DishPairingSchema, 'dish_pairing')
