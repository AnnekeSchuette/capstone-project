const express = require('express')
const JournalEntry = require('../models/JournalEntry')
const router = express.Router()

/* router.get('/', async (req, res, next) => {
  res.json(await JournalEntry.find().catch(next))
}) */

router.get('/', async (req, res, next) => {
  res.json(
    await JournalEntry.aggregate([
      {
        $lookup: {
          from: 'stored_wines',
          localField: 'wineId',
          foreignField: 'wineId',
          as: 'wine',
        },
      },
    ]).sort({ createdAt: -1 })
  )
})

router.get('/:wineId', async (req, res, next) => {
  const { wineId } = req.params
  res.json(await JournalEntry.findOne({ wineId: wineId }).catch(next))
})

router.post('/:wineId', async (req, res, next) => {
  res.json(await JournalEntry.create(req.body).catch(next))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(
    await JournalEntry.findOneAndUpdate(
      { _id: { id } },
      { $set: req.body },
      { upsert: true, returnNewDocument: true }
    ).catch(next)
  )
})
router.put('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(
    await JournalEntry.findByIdAndUpdate(
      id,
      { $set: { notes: req.body.notes, rating: req.body.rating } },
      { new: true }
    ).catch(next)
  )
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await JournalEntry.findByIdAndDelete(id).catch(next))
})

module.exports = router
