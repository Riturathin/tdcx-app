const express = require('express');
const router = express.Router();
const { create, findAll, findOne , update, deleteTask } = require('../controllers/TasksController');
const { register, login } = require('../controllers/UsersController');
// Create a new task
router.post('/tasks', create);

// Retrieve all tasks
router.get('/tasks', findAll);

// Retrieve a single task with taskId
router.get('/tasks/:taskId', findOne);

// Update a task with taskId
router.put('/tasks/:taskId', update);

// Delete a task with noteId
router.delete('/tasks/:taskId', deleteTask);

// Register user
router.post( '/register', register );

// Login User
router.post( '/login' , login );



module.exports = router;