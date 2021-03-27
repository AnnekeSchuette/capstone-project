const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      unique: true,
    },
    journal_entries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JournalEntry',
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('User', UserSchema, 'users')
