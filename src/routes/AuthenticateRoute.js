import React from 'react';
import { 
	Router, 
	Switch, 
	Route,
	Redirect 
} from 'react-router-dom';
import PrivateRoute from '../authentication/PrivateRoute';
import history from '../browser/history';
import Dashboard from '../components/Dashboard';

const AuthenticateRoute = () => 
	<Router history={history}>
		<Switch>
			<Dashboard />
    </Switch>
  </Router>

export default AuthenticateRoute;