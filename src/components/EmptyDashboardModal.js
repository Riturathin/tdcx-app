import React, { useState } from 'react';
import NewTaskButton from './NewTaskButton';
import CreateTaskModal from './CreateTaskModal';
import CreateTaskModalInfo from './CreateTaskModalInfo';

const EmptyDashboardModal = () => {
	const [ isOpen , setisOpen ] = useState(false);

	const isOpenModal = ( val) => {
		setisOpen( val )	
	}
	return (<>
			<div  className='col-12 col-md-3 offset-md-4 mt-2'>
				<h1>You have no tasks</h1>
				<NewTaskButton revealModal={ isOpenModal }/>
			</div>

			<div className={ `modal-${ isOpen }`}>
					<CreateTaskModal />
					<CreateTaskModalInfo revealModal={ isOpenModal } />
				</div>
		</>
	)
}

export default EmptyDashboardModal;