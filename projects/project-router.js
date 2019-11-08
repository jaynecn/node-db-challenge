const express = require('express');

const Projects = require('./project-model');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to get projects ' + error.message})
  })
})

module.exports = router;