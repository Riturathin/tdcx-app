import React ,  { useState, useEffect } from 'react';
import TasksList from './TasksList';

const TasksListView = () => {
	const [ tasks , setTasks] = useState({});

	useEffect( () => {
		async function fetchTasksList() {
			await fetch('http://localhost:4000/tasks' , {
				method: 'GET',
			  headers: {
			    Accept: 'application/json',
			  },
			})
			.then( res => res.json())
				.then( data => setTasks(data) )
		}
		
		fetchTasksList();
		
	}, [tasks]);

	const taskCount = tasks.length;
	return (
		<div className='container'>
			{ taskCount > 0 ? <TasksList tasks={tasks} /> : <h1>No Tasks Available</h1> }
		</div>
	 
	)
}

export default TasksListView;