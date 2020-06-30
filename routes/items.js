const express = require('express');

const Item = require('../models/items');

const router = express.Router();

// @route GET /api/items
// @access Public for now
// @desc returns all of the times in the db

router.get('/', async (req, res) => {
  res.json({ items: await Item.find({}) });
});

router.post('/', async (req, res) => {
  console.log(req.body);
  res.send(req.body);
  // res.json({ addedItem: await Item.create(req.body) });
});

module.exports = router;
