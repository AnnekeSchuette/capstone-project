const express = require('express')
const Wine = require('../models/Wine')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await Wine.find().catch(next))
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Wine.findOne({ id: id }).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Wine.findByIdAndDelete(id).catch(next))
})

router.post('/', async (req, res, next) => {
  res.json(await Wine.create(req.body).catch(next))
})

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(
    await Wine.findOneAndUpdate(
      { id: id },
      { $set: req.body },
      { upsert: true, returnNewDocument: true }
    ).catch(next)
  )
})
module.exports = router
