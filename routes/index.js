var express = require('express');
var router = express.Router();
var tasksCtrl = require('../controllers/tasks.Ctrl');
/*
router.get('/', function(req, res){
	res.render('index');
});
*/
router.get('/newtask', function(req, res){
	res.render('newTask');
})

router.get('/', tasksCtrl.allTasks);

router.post('/newTask', tasksCtrl.createTask);

module.exports = router;