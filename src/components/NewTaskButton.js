import React from 'react';

const NewTaskButton = ({revealModal}) => {

	const openRevealModal = () => {
		revealModal(true)
	}

	return (
		<button className="btn btn-primary open-modal-button" onClick={ openRevealModal }>+New Task</button>
	)
}

export default NewTaskButton;