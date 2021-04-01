const express = require('express')
const JournalEntry = require('../models/JournalEntry')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await JournalEntry.find().catch(next))
})

router.get('/:wine_id', async (req, res, next) => {
  res.json(
    await JournalEntry.find({
      wine_id: req.params.wine_id,
      /* $and: [
        { wine_id: req.params.wine_id },
        { user_id: `ObjectId('${req.params.user_id}')` },
      ], */
    }).catch(next)
  )
})

router.patch('/:id/edit', async (req, res, next) => {
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

router.post('/', async (req, res, next) => {
  res
    .json(await JournalEntry.create(req.body))
    .populate('user')
    .execPopulate()
    .catch(next)
})

module.exports = router
