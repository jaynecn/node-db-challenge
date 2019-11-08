const express = require('express');

const Resources = require('./resource-model');

const db = require('../data/db-config');

const router = express.Router();

// GET request
router.get('/', (req, res) => {
  Resources.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to get resources ' + error.message})
  })
})


// POST request
router.post('/', (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
  .then(resource => {
    res.status(201).json({ message:'resource created with id number ' + resource});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource'  + err.message});
  });
});


module.exports = router;