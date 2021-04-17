import React, { useState, useEffect } from 'react';

const Modal = ( props ) => {
	const [ top, setTop ] = useState('0');
	const [ left, setLeft ] = useState('0');
	useEffect(() => {
		debugger
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

	return (
			<div className='modal-class'>
				<div className='modal-info' style={{top: top, left: left }}>
					<h4 className="create-task-modal-info-heading">{props.modalData.title}</h4>
					<form >
					  <div className="">
					      <input type="text" 
					      		className="form-control" 
					      		name="name" 
					      		placeholder={props.modalData.placeholderText} 
					      		/>
				    </div>
				    <div className="mt-2">
				      <button type="text" className="btn btn-primary add-task">{props.modalData.buttonText}</button>
				    </div>
					</form>
				</div>
			</div>
	)
}

export default Modal;