const express = require('express');

const Item = require('../models/items');

const router = express.Router();

// @route GET /api/items
// @access Public for now
// @desc returns all of the times in the db

router.get('/', async (req, res) => {
  res.json({ items: await Item.find({}) });
});

module.exports = router;
