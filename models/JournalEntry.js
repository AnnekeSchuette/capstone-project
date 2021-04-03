const mongoose = require('mongoose')

const JournalEntrySchema = new mongoose.Schema(
  {
    wineId: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    wine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Wine',
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
