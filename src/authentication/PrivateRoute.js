import React, { useState, useEffect } from 'react';

import RouteManager from '../routes/RouteManager';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import {
  Route,
  Redirect
} from 'react-router-dom';


const isAuthenticated = () => { 
  const token = localStorage.getItem('token');
  try {
    if(token){
      return true;
    }
    else{
      return false;
    }
  } catch (error) {
    return false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const registrationRequested = localStorage.getItem('registrationRequested');
  const [ isRegistrationRequested , setIsRegistrationRequested ] = useState(false);

  // useEffect(() => {
  //   const registrationRequested = localStorage.getItem('registrationRequested');
  //   alert(registrationRequested)
  //   setIsRegistrationRequested(registrationRequested)
  // });
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
        	<>
        		<Home {...props} />
        	</>
        ) : (
        <>
        {
          !isRegistrationRequested ? 
            (
              <>
              <Route exact path='/login' component={ Login }></Route>
                <Redirect
                  to={{
                    pathname: "/login",
                  }}
                />
            </>
            ):
            (
              <>
                <Route exact path='/register' component={ Register }></Route>
                  <Redirect
                    to={{
                      pathname: "/register",
                    }}
                />
              </>
            )    
          }
        </>
        )
      }
    />
  );
}

export default PrivateRoute;