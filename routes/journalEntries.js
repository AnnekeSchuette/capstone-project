const express = require('express')
const JournalEntry = require('../models/JournalEntry')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await JournalEntry.find().catch(next))
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await JournalEntry.findById(id).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await JournalEntry.findByIdAndDelete(id).catch(next))
})

router.post('/', async (req, res, next) => {
  res.json(await JournalEntry.create(req.body).catch(next))
})

module.exports = router
