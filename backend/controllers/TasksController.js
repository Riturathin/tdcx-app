const Task = require('../models/tasks');

// Create and Save a new task
exports.create = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Task content can not be empty"
        });
    }

    // Create a task
    const task = new Task({
        name: req.body.name, 
        status: req.body.status
    });

    console.log(task)
    // Save task in the database
    task.save()
    	.then(data => {
        res.send(data);
    	}).catch(err => {
        res.status(500).send({
            message: err.message || "An unexpected error occured while creating the task."
        });
    });
};

// Retrieve and return all tasks from the database.
exports.findAll = (req, res) => {
	Task.find()
    .then(tasks => {
        res.send(tasks);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An unexpected error occured while creating the task."
        });
    });
};

// Find a single task with a taskId
exports.findOne = (req, res) => {
	Task.findById(req.params.taskId)
    .then( task => {
        if(!task) {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });            
        }
        res.send(task);
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving task with id " + req.params.taskId
        });
    });
};

// Update a task identified by the taskId in the request
exports.update = (req, res) => {
    
    if(!req.body.name) {
        return res.status(400).send({
            message: "Task title can not be empty"
        });
    }

  
    Task.findByIdAndUpdate(req.params.taskId, {
        name: req.body.name,
        status: req.body.status
	    }, 
	    {new: true}
    )
    .then(task => {
        if(!task) {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });
        }
        res.send(task);
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Error updating task with id " + req.params.taskId
        });
    });
};

// Delete a task with the specified taskId in the request
exports.deleteTask = (req, res) => {

	Task.findByIdAndRemove(req.params.taskId)
    .then(task => {
        if(!task) {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });
        }
        res.send({message: "Task deleted successfully!"});
    })
    .catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Task not found with id " + req.params.taskId
            });                
        }
        return res.status(500).send({
            message: "Could not delete task with id " + req.params.taskId
        });
    });
};
