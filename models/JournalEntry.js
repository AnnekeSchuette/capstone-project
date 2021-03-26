const mongoose = require('mongoose')

const JournalEntrySchema = new mongoose.Schema(
  {
    wine_id: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    notes: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('JournalEntry', JournalEntrySchema, 'journal_entries')
