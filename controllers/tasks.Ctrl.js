'use strict'

var Task = require('../models/Task.model');

//create a new task
exports.createTask = function(req, res){
	var newTask = new Task();
	newTask.taskName = req.body.taskName;
	newTask.category = req.body.category;
	newTask.requiredTime = req.body.requiredTime;
	newTask.description = req.body.description;

	console.log("Task name: "+newTask.taskName);
	console.log("category: "+newTask.category);


	newTask.save(function(err){
		if(err){
			var errMsg = "Sorry! There was an error while saving the new task. " + err;
			console.log(errMsg);
			res.render('newTask', {message:errMsg});
		}else{
			console.log('Success! New task has been saved');
			res.redirect(301,'/');
		}
	});
}

//show all tasks
exports.allTasks = function(req, res){
	Task.find({}).
	sort({
		createdOn: 'asc'
	}).
	limit(10).
	exec(function(err, tasks){
		if(err){
			res.send("An error has occured.");
		}else{
			res.render('index', {
				tasks: tasks
			});
		}
	});
}