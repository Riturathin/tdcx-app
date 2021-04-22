import React, { useState, useEffect } from 'react';

import RouteManager from '../routes/RouteManager';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Header from '../common/Header';
import {
  Route,
  Redirect
} from 'react-router-dom';


const isAuthenticated = () => { 
  const token = sessionStorage.getItem('token');
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
  return (
    <>
      <Route
        {...rest}
        render={ props =>
          isAuthenticated() ? (
          	<>
              <Header />
          		<Component {...props} />
          	</>
          ) : 
          (       
            <>
              <Route path='/login' component={ Login }></Route>
              <Redirect
                  to={{
                    pathname: "/login"
                  }}
                />
            </>    
          )
      }
    />
  </>
  );
}

export default PrivateRoute;