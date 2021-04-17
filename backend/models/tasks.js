const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model( 'Task', TaskSchema );