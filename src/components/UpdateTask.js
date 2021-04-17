import axios from 'axios';
import React , { useState, useEffect } from 'react';
import '../styles/CreateTaskModalInfo.css';

const CreateTaskModal = ({name, status, taskId}) => {

	const [ task , setTask ] = useState("");
	const [ taskStatus, setTaskStatusCompleted ] = useState(false);

	useEffect(() => {
		setTask(name);
		setTaskStatusCompleted(status);
	}, [name, status])

	const handleChangeNameUpdate = (e) => {
		setTask(e.target.val);
	}

	const handleChangeStatusUpdate = (e) => {
		let statusVal = e.target.checked ? 'completed':'pending'
		setTaskStatusCompleted( statusVal )
		console.log( e.target.checked )
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		debugger
		axios.post( `http://localhost:4000/tasks/${ taskId }` , {
			name: task,
			status: taskStatus
		});
	}

	return (
		<div className='create-task-modal-info'>
				<h4 className="create-task-modal-info-heading">Update Task</h4>
				<form onSubmit={ handleSubmit }>
				  <div className="">
				      <input type="text" 
				      		className="form-control" 
				      		name="name" 
				      		value={ task } 
				      		onChange={handleChangeNameUpdate}/>
			    </div>

			    <div className='mt-2'>
			    	<input type='checkbox'
				  				className="" 
				      		name="status" 
				  				onChange={handleChangeStatusUpdate}/>
				  				<label htmlFor="status">Status</label>
			    </div>
			    <div className="mt-2">
			      <button type="text" className="btn btn-primary add-task">Edit Task</button>
			    </div>
				</form>
		</div>
	)
}

export default CreateTaskModal;