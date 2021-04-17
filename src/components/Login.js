import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateTaskModal from './CreateTaskModal';
import { Link, Redirect } from 'react-router-dom';
import ValidationErrors from '../common/ValidationErrors';
import '../styles/Login.css';

const Login = () => {

	const [ email , setEmail ] = useState('');
	const [ password , setPassword ] = useState('');
	const [ formError , setFormError ] = useState('');
	const [ isAuthenticated , setIsAuthenticated ] = useState(false);
	const [ top, setTop ] = useState('0');
	const [ register, setRegister ] = useState(false);

	useEffect(() => {
		const setModalPosition = () => {
			const windowHeight = window.innerHeight;
			const infoHeight = document.querySelector('.login-modal').offsetHeight;
			const topPos = `${ windowHeight-2*infoHeight}px`
			setTop( topPos );
		}
		
		setModalPosition();

	}, [])



	const handleLoginSubmit = (e) => {
		e.preventDefault();
    console.log(  email, password )
		const loginUser = async () => {
			await axios.post('http://localhost:4000/login' ,{
				email: email,
				password: password,
			})
			.then( data => {
        console.log(data.data.username)
				localStorage.setItem( 'token' ,  data.data.token );
				localStorage.setItem( 'username' , data.data.username );
				setIsAuthenticated(data.data.success)
			})
			.catch( error => {
				if (error.response){
					setFormError( error.response.data )
				}
			})
		} 
		loginUser()
	}

	const redirectToRegister = () => {
		localStorage.setItem( 'registrationRequested' , true );
		window.location.reload()
	}

	return (
		<>
		{ isAuthenticated ? <Redirect to='/dashboard' /> :
		<div className='col-12 col-md-4 offset-md-4'>
			<CreateTaskModal />
			<div className='login-modal' style={{ top: top }}>
				{ formError && 
					<ValidationErrors errors={ formError } />
				}
				<form onSubmit={ handleLoginSubmit } >
					<h3 className="text-left">Login</h3>
			    <div className="mt-3">
				      <input type="text" 
				      		className="form-control" 
				      		name="email" 
				      		placeholder="Name"
				      		value={ email } 
				      		onChange={ e => setEmail(e.target.value)}/>
			    </div>

			    <div className='mt-2 mb-3'>
			    	<input type='password'
				  				className="form-control" 
				      		name="password" 
				      		placeholder="Password"
				      		value={ password }
				  				onChange={ e => setPassword(e.target.value)}/>
				  		
			    </div>

			    <div className="mt-2">
			      <button type="text" className="btn btn-primary add-task">Login</button>
			    </div>

			    <div className='mt-2 sign-up-link text-center'>
			    	<Link to="/register" onClick={ redirectToRegister }>Don't have an account? Sign Up</Link>
			    </div>

				</form>
			</div>
		</div>
	}
	</>

	)
}

export default Login;