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
  try {
    res.json({ successful: true, items: await Item.find({}) });
  } catch (err) {
    res.json({ successful: false, err });
  }
});

// @route POST /api/items
// @access Public for now
// @desc Adds item to db
router.post('/', async (req, res) => {
  try {
    let item = objectSanitizer(req);

    if (!item) {
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
  } catch (err) {
    return res.json({ successful: false, err: err.message });
  }
});

module.exports = router;
