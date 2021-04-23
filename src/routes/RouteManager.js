import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import TasksListView from '../components/TasksListView';
import EditTask from '../components/EditTask';
import Register from '../components/Register';
import Login from '../components/Login';
import history from '../browser/history';
import PrivateRoute from '../authentication/PrivateRoute';

const RouteManager = (props) => 
	<Router history={history}>
		<Switch>
			<Route path='/login' component={ Login } key="login"></Route>
      <PrivateRoute exact path='/dashboard' component={ Dashboard } key="dashboard"></PrivateRoute>
      <PrivateRoute exact path='/' component={ Dashboard } key="dashboard"></PrivateRoute>
      <PrivateRoute path='/tasks/' exact component={ TasksListView } key="taskslist"></PrivateRoute>
      <PrivateRoute path='/task/:id' exact component={ EditTask } key="edit"></PrivateRoute>
      <Route path='/register' exact component={ Register } key="register"></Route>
    </Switch>
  </Router>

export default RouteManager;