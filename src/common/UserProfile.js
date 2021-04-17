import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = ({username}) => {
	return ( 
		<div className="mt-3 mb-3">
			<img className="user-profile-image" 
					src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" 
					/>
			<span className="user-profile-name">{username}</span>
		</div>
	)
}

export default UserProfile;