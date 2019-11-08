const express = require('express');

const Projects = require('./project-model');

const db = require('../data/db-config');

const router = express.Router();

// GET requests
router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to get projects ' + error.message})
  })
})

router.get('/:id',  (req, res) => {
  const { id } = req.params;
  Projects.findById(id)
   .then(project => {
     if (project) {
       res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project '  + err.message});
    });
  });

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given scheme' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks ' + err.message });
    });
  });

// POST requests


module.exports = router;