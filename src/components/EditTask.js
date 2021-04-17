import React , { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTaskModal from './CreateTaskModal';
import history from '../browser/history';
import Modal from '../common/Modal';

const EditTask = ({match}) => {

	const modalData = {
		title: 'Update Task',
		placeholderText: 'Update Task',
		buttonText: 'UpdateText'
	};

	const taskId = match.params.id
	const [ task , setTask ] = useState('');
	const [ status, setStatus ] = useState(false);
	const [ top, setTop ] = useState('0');
	const [ left, setLeft ] = useState('0')

	useEffect( () => {

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



		const handleUpdateSubmit = (taskId) => {
		const url = `http://localhost:4000/tasks/${ taskId }`;
		axios.get(url)
      .then(response => {
      		console.dir( response.data )
          setTask(response.data.name);
          setStatus(response.data.status); 
      })
      .catch(function (error) {
          console.log(error);
      })
		}

		handleUpdateSubmit(taskId)
	}, [])

	const handleChangeNameUpdate = (e) => {
		setTask(e.target.value);
	}

	const handleChangeStatusUpdate = (e) => {
		let statusVal = e.target.checked
		setStatus( statusVal )
		console.log( status )
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.put( `http://localhost:4000/tasks/${ taskId }` , {
			name: task,
			status: status
		}).then( res => history.push("/dashboard") )
	}

	return ( 
		<div className='container'>
			<Modal modalData={modalData}/>
			<div className='create-task-modal-info' style={{top: top, left: left }}>
				<h4 className="create-task-modal-info-heading">Update Task</h4>
				<form onSubmit={ handleSubmit }>
				  <div className="">
				      <input type="text" 
				      		className="form-control" 
				      		name="task" 
				      		value={ task } 
				      		onChange={handleChangeNameUpdate}/>
			    </div>

			    <div className='mt-2'>
			    	<input type='checkbox'
				  				className="" 
				      		name="status" 
				      		checked={status}
				  				onChange={() => setStatus(!status)}/>
				  				<label htmlFor="status">Status</label>
			    </div>
			    <div className="mt-2">
			      <button type="text" className="btn btn-primary add-task">Edit Task</button>
			    </div>
				</form>
		</div>
		</div>
	)
}

export default EditTask;