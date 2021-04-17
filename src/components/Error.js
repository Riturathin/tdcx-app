import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className="container">
			<h1> 404</h1>
			<p>Oops! the page you are trying to access does not exist. Go back to Home Page</p>
			<Link to='/'>
				<div className="btn btn-primary">Home</div>
			</Link>
		</div>
	)
}

export default Error;