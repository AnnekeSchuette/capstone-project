const mongoose = require('mongoose')

const JournalEntrySchema = new mongoose.Schema(
  {
    wine_id: {
      type: Number,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      default: 0,
    },
    notes: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('JournalEntry', JournalEntrySchema, 'journal_entries')
