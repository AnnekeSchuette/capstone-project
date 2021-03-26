const express = require('express')
const Category = require('../models/Category')
const router = express.Router()

const buildAncestors = async (id, parent_id) => {
  let ancest = []
  try {
    let parent_category = await Category.findOne(
      { _id: parent_id },
      { name: 1, slug: 1, ancestors: 1 }
    ).exec()
    if (parent_category) {
      const { _id, name, slug } = parent_category
      const ancest = [...parent_category.ancestors]
      ancest.unshift({ _id, name, slug })
      const category = await Category.findByIdAndUpdate(id, {
        $set: { ancestors: ancest },
      })
    }
  } catch (err) {
    console.log(err.message)
  }
}

router.post('/', async (req, res) => {
  const category = new Category({ name: req.body.name })
  try {
    let newCategory = await category.save()
    res.status(201).send({ response: `Category ${newCategory._id}` })
  } catch (err) {
    res.status(500).send(err)
  }
})

// display a category
router.get('/', async (req, res) => {
  try {
    const result = await Category.find({ slug: req.query.slug })
      .select({
        _id: false,
        name: true,
        'ancestors.slug': true,
        'ancestors.name': true,
      })
      .exec()
    res.status(201).send({ status: 'success', result: result })
  } catch (err) {
    res.status(500).send(err)
  }
})

// display the descendants of a category (via ID)
router.get('/descendants', async (req, res) => {
  try {
    const result = await Category.find({
      'ancestors._id': req.query.category_id,
    })
      .select({ _id: false, name: true })
      .exec()
    res.status(201).send({ status: 'success', result: result })
  } catch (err) {
    res.status(500).send(err)
  }
})

// create sub categories
router.post('/', async (req, res) => {
  let parent = req.body.parent ? req.body.parent : null
  const category = new Category({ name: req.body.name, parent })
  try {
    let newCategory = await category.save()
    buildAncestors(newCategory._id, parent)
    res.status(201).send({ response: `Category ${newCategory._id}` })
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req, res, next) => {
  const { name, parent } = req.body
  res.json(await (await Category.create(name, parent)).catch(next))
})
module.exports = router
