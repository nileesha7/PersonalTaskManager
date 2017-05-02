var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requiredTimeValidator = [
	function(val){
		return (val>0);
	},
	'The number of days should be more than 0.'
];

var TaskSchema = new Schema({
	taskName:{
		type:String,
		required: true
	},
	category:{
		type:String,
		required: true,
	},
	requiredTime:{
		type:Number,
		validate: requiredTimeValidator
	},
	description:{
		type:String
	},
	createdOn:{
		type:Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Task', TaskSchema);