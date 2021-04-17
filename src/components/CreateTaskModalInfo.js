import axios from 'axios';
import React , { useState, useEffect } from 'react';
import '../styles/CreateTaskModalInfo.css';
import { Redirect } from 'react-router-dom';

const CreateTaskModal = ({ revealModal , tasks }) => {

	const [ task_name, setTaskName ] = useState('');
	const [ top, setTop ] = useState('0');
	const [ left, setLeft ] = useState('0');

	useEffect(() => {
		const setModalPosition = () => {
			const windowHeight = window.innerHeight;
			const infoHeight = 500;
			const topPos = `${ windowHeight-infoHeight}px`;
			const windowWidth = window.innerWidth;
			const infoWidth = document.querySelector('.create-task-modal-info').offsetWidth;
			const leftPos = `${ windowWidth/2-infoWidth/2}px`;
			setTop( topPos );	
			setLeft( leftPos );		
		}
		setModalPosition();

	})

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post( `http://localhost:4000/tasks` , {
			name: task_name,
			completed: false
		}).then( () => {
			hideRevealModal();
			return <Redirect to='/' />;
		});
	}

	const handleChangeInputVal = (e) => {
		setTaskName(e.target.value);
	}

	const hideRevealModal = () => {
		revealModal(false)
	}


	return (
		<div className='create-task-modal-info' style={{top: top, left: left }}>
				<h4 className="create-task-modal-info-heading">+ New Task</h4>
				<form onSubmit={ handleSubmit }>
				  <div className="">
				      <input type="text" 
				      		className="form-control" 
				      		name="name" 
				      		placeholder="Task Name" 
				      		onChange={handleChangeInputVal}/>
			    </div>
			    <div className="mt-2">
			      <button type="text" className="btn btn-primary add-task">+ New Task</button>
			    </div>
				</form>
		</div>
	)
}

export default CreateTaskModal;