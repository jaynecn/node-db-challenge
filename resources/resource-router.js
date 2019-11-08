const express = require('express');

const Resources = require('./resource-model');

const db = require('../data/db-config');

const router = express.Router();

// GET requests
router.get('/', (req, res) => {
  Resources.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to get resources ' + error.message})
  })
})



// POST requests


module.exports = router;