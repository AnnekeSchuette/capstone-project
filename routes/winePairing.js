const express = require('express')
const WinePairing = require('../models/WinePairing')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await WinePairing.find().catch(next))
})

router.get('/:food', async (req, res, next) => {
  res.json(await WinePairing.find({ food: req.params.food }).catch(next))
})

router.delete('/:food', async (req, res, next) => {
  const { food } = req.params
  res.json(
    await WinePairing.findOneAndDelete(
      { food: food },
      { useFindAndModify: false }
    ).catch(next)
  )
})

router.post('/', async (req, res, next) => {
  res.json(await WinePairing.create(req.body).catch(next))
})

router.patch('/:food', async (req, res, next) => {
  const { food } = req.params
  res.json(
    await WinePairing.findOneAndUpdate(
      { food: food },
      { $set: req.body },
      { upsert: true, returnNewDocument: true }
    ).catch(next)
  )
})

module.exports = router
