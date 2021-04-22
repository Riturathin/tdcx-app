import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logout.css';

const Logout = () => {
	const flushCurrentUserSession = () => {
		sessionStorage.removeItem('token')
		sessionStorage.removeItem('username')
	}

	return ( 
		<div className="mt-4">
			<div className="text-right header-logout-link">
				<Link to='/' onClick={ flushCurrentUserSession }> Logout </Link> 
			</div>
		</div>
	)
}

export default Logout;