import React, { useState , useEffect } from 'react';
import axios from 'axios';
import CreateTaskModal from './CreateTaskModal';
import ValidationErrors from '../common/ValidationErrors';
import history from '../browser/history';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {

	const [ name , setName ] = useState('');
	const [ email , setEmail ] = useState('');
	const [ password , setPassword ] = useState('');
	const [ formError , setFormError ] = useState('');
	const [ top, setTop ] = useState('0');
	const [ register, setRegister ] = useState(false);

	useEffect(() => {
		const setModalPosition = () => {
			const windowHeight = window.innerHeight;
			const infoHeight = document.querySelector('.register-modal').offsetHeight;
			const topPos = `${ windowHeight-2*infoHeight}px`
			setTop( topPos );
		}
		
		setModalPosition();

	}, [])


	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		const registerUser = async () => {
			await axios.post('http://localhost:4000/register' ,{
				name: name,
				email: email,
				password: password,
			},
				{
					headers: {
		   		'token': 'secret'
				}
			})
			.then( data => history.push('/login'))
			.catch( error => {
				if (error.response){
					setFormError( error.response.data )
				}
			})
		} 
		registerUser()
	}

	return (
		<div className='col-12 col-md-4 offset-md-4'>
			<CreateTaskModal />
			<div className='register-modal' style={{ top: top }}>
				{ formError && 
					<ValidationErrors errors={ formError } />
				}
				<form onSubmit={ handleRegisterSubmit } >
					<h3 className="text-left">Register</h3>
				  <div className="mt-3">
				      <input type="text" 
				      		className="form-control" 
				      		name="name" 
				      		value={ name }
				      		placeholder="Enter Name" 
				      		onChange={ e => setName(e.target.value) }/>
			    </div>

			    <div className="mt-2">
				      <input type="text" 
				      		className="form-control" 
				      		name="email" 
				      		placeholder="Enter email"
				      		value={ email } 
				      		onChange={ e => setEmail(e.target.value)}/>
			    </div>

			    <div className='mt-2 mb-3'>
			    	<input type='password'
				  				className="form-control" 
				      		name="password" 
				      		placeholder="Enter Password"
				      		value={ password }
				  				onChange={ e => setPassword(e.target.value)}/>
				  		
			    </div>

			    <div className="mt-2">
			      <button type="text" className="btn btn-primary add-task">Register</button>
			    </div>

			    <div className='mt-2 sign-up-link text-center'>
			    	<Link to="/login" >Already have an account? Login</Link>
			    </div>

				</form>
			</div>
		</div>
		

	)
}

export default Register;