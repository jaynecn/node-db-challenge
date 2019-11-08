const express = require('express');

const Projects = require('./project-model');

const db = require('../data/db-config');

const router = express.Router();

// GET requests
router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    const amend = projects;
    amend.map((data) => {
      const changeToTrue = 'true';
      const changeToFalse = 'false';
     if(data.completed === 1) {
       data.completed = changeToTrue;
     } else data.completed = changeToFalse;
    })
    res.json(amend);
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to get projects ' + error.message})
  })
})

router.get('/:id',  (req, res) => {
  const { id } = req.params;
  Projects.findById(id)
   .then(project => {
    const amend = project;
    amend.map((data) => {
      const changeToTrue = 'true';
      const changeToFalse = 'false';
     if(data.completed === 1) {
       data.completed = changeToTrue;
     } else data.completed = changeToFalse;
     console.log(data.completed);
    })
    res.json(amend);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project '  + err.message});
    });
  });

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;
  // const boolean  = req.params.

  Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        const amend = tasks;
    amend.map((data) => {
      const changeToTrue = 'true';
      const changeToFalse = 'false';
     if(data.completed === 1) {
       data.completed = changeToTrue;
     } else data.completed = changeToFalse;
     console.log(data.completed);
    })
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

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
  .then(project => {
    res.status(201).json({ message:'project created with id number ' + project});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project'  + err.message});
  });
});

router.post('/:id/tasks', (req, res) => {
  const taskData = req.body;
  const { id } = req.params; 

  Projects.findById(id)
  .then(task => {
    if (task) {
      Projects.addTask(taskData, id)
      .then(step => {
      res.status(201).json({message:'task created with id number ' + step});
      })
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task ' + err.message });
  });
});


module.exports = router;