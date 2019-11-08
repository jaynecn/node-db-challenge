const express = require('express');

const ProjectsRouter = require('./projects/project-router');
// const ResourcesRouter = require('./ProjectsFolder/resources-router')

const server = express();

//plug middleware
server.use(express.json());
server.use('/api/projects', ProjectsRouter)
// server.use('/api/resources', ResourcesRouter)

// catch-all endpoint
server.get('*', handleDefault)
function handleDefault(req, res) {
  res.json('hello welcome to the Node DB Challenge')
}

//listen
server.listen(process.env.PORT || 9500, () => {
  console.log('listening on the server ' + (process.env.PORT || 9500 ));
})