import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import UserProfile from './UserProfile';
import Logout from './Logout';



const Header = () => {
	const [ username , setUsername ] = useState('');

	useEffect(() => {
		const username = localStorage.getItem('username');
		setUsername( username )
		console.log( username )
	}, []);

	return ( 
		<nav className='main-header'>
			<div className='container'>
				<div className='row'>
					<div className='col-8'>
						<UserProfile username={ username }/>
					</div>

					<div className="col-4">
						<Logout />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header;