const express = require('express')
const Wine = require('../models/Wine')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await Wine.find().catch(next))
})

router.get('/:wine_id', async (req, res, next) => {
  const { wine_id } = req.params
  res.json(await Wine.findOne({ id: wine_id }).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Wine.findByIdAndDelete(id).catch(next))
})

router.post('/', async (req, res, next) => {
  res.json(await Wine.create(req.body).catch(next))
})

router.patch('/:wine_id', async (req, res, next) => {
  const { wine_id } = req.params
  res.json(
    await Wine.findOneAndUpdate(
      { id: wine_id },
      { $set: req.body },
      { upsert: true, returnNewDocument: true }
    ).catch(next)
  )
})
module.exports = router
