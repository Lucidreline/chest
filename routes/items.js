const validUrl = require('valid-url');
const express = require('express');
const config = require('config');

const Item = require('../models/items');

const objectSanitizer = require('../utils/santizer');

const router = express.Router();

// @route GET /api/items
// @access Public for now
// @desc returns all of the times in the db

router.get('/', async (req, res) => {
  res.json({ items: await Item.find({}) });
});

// @route POST /api/items
// @access Public for now
// @desc Adds item to db
router.post('/', async (req, res) => {
  let item = objectSanitizer(req);

  item = null;

  if (!item.successful) {
    return res.json(item);
  }

  const { name, price } = item;
  let { imageUrl } = item;

  if (!imageUrl || !validUrl.isUri(imageUrl)) {
    imageUrl = config.get('defaultItemImage');
  }

  item = {
    name,
    price,
    imageUrl,
  };

  return res.json({ successful: true, addedItem: await Item.create(item) });
});

module.exports = router;
