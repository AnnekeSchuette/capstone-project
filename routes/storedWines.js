const express = require('express')
const Wine = require('../models/Wine')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await Wine.find().catch(next))
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Wine.findById(id).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await Wine.findByIdAndDelete(id).catch(next))
})

router.post('/', async (req, res, next) => {
  res.json(await Wine.create(req.body).catch(next))
})

module.exports = router
