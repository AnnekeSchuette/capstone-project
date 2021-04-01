const mongoose = require('mongoose')

const JournalEntrySchema = new mongoose.Schema(
  {
    wine_id: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      default: 0,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model(
  'JournalEntry',
  JournalEntrySchema,
  'journal_entries'
)
