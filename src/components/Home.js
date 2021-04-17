import React from 'react';
import Header from '../common/Header';
import Dashboard from './Dashboard';
import { Redirect } from 'react-router-dom';

const Home = () => {
	return ( 
		<>
			<Header />
			<Dashboard />
		</>
	)
}

export default Home;