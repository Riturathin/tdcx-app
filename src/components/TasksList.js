import React , { useState }from 'react';
import '../styles/TasksList.css';
import axios from 'axios';
import { Edit , Delete } from '../icons/Icons';
import { Link , Redirect } from 'react-router-dom';
import ListItemText from '../common/ListItemText';

const TasksList = (props) => {
	const [deleteTask, setDeleteTask] = useState(false);
	const handleValueChange = (e) => {
		// setComplete( e.target.checked )
		handleFormResubmit(e.target.checked);
	}

	const handleFormResubmit = ( completed ) => {
		// setComplete(completed);
	}

	const handleDelete = (e) => {
		const deleteKey =  e.target.parentElement.parentElement.id;
  	handleDeleteSubmit(deleteKey) 
	}

	const handleDeleteSubmit = (taskId) => {
		const url = `http://localhost:4000/tasks/${ taskId }`
		console.log( url )
		const deleteAndUpdateTasksList = async () => {
			await axios.delete(	url )
			.then( res => {
				props.onChildDeleteTask( res );
				setDeleteTask(true);

			})
		}

		deleteAndUpdateTasksList()
		
	}

	return ( 
		<>
		{ deleteTask && <Redirect to='/' /> }
		<div className='mt-3'>
			<div className='row mb-3'>
				<div className='col-12 col-md-8'>
					<h4 className='tasks-list-title'>Tasks</h4>
				</div>
			</div>

			<ul className='tasks-list'>
				{props.tasks.slice(0,4).map( task => {
					return <li id={ task._id } key={ task._id }>
					 	<input type="checkbox" 
					 					aria-label={ task.name } 
					 					value={ task.status } 
					 					onChange={ handleValueChange } 
					 					defaultChecked={ task.status }
					 					disabled
					 					/>
						 <ListItemText taskCompleted={ task.status } task={task} />
						 <Link to={`/task/${ task._id }`}><Edit /></Link>
						 <span className='delete-task' onClick={ handleDelete } ><Delete /></span>
					</li>
				})}
				
			</ul>
		</div>
		</>
	)
}

export default TasksList;
