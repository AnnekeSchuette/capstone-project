const mongoose = require('mongoose')

const User = new mongoose.Schema(
  {
    user_name: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('user', User, 'users')
