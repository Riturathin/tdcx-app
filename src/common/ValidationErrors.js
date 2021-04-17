import React from 'react';
import '../styles/ValidationErrors.css';

const ValidationErrors = ({errors}) => {
	return (
		<div className="alert alert-danger">
			<h4 className='validation-errors-title'>Errors</h4>
			<ul className='validation-errors-list'>
				{Object.values(errors).map( error => {
					return <li className='validation-errors-list-item'>{error}</li>
				})}
			</ul>
		</div>
	)
}

export default ValidationErrors;