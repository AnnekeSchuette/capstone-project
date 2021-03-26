const express = require('express')
const DishPairing = require('../models/DishPairing')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await DishPairing.find().catch(next))
})

router.get('/:wine', async (req, res, next) => {
  res.json(await DishPairing.find({ wine_type: req.params.wine }).catch(next))
})

router.delete('/:wine', async (req, res, next) => {
  const { wine } = req.params
  res.json(
    await DishPairing.findOneAndDelete({ wine_type: wine }, { useFindAndModify: false }).catch(next)
  )
})

router.post('/', async (req, res, next) => {
  res.json(await DishPairing.create(req.body).catch(next))
})

router.patch('/:wine', async (req, res, next) => {
  const { wine } = req.params
  res.json(
    await DishPairing.findOneAndUpdate(
      { wine_type: wine },
      { $set: req.body },
      { upsert: true, returnNewDocument: true }
    ).catch(next)
  )
})

module.exports = router
