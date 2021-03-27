const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await User.find().catch(next))
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findById(id).populate('journal-entries').catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await User.findByIdAndDelete(id).catch(next))
})

router.post('/', async (req, res, next) => {
  res
    .json(await User.create(req.body))
    .populate('journal-entries')
    .execPopulate()
    .catch(next)
})

module.exports = router
