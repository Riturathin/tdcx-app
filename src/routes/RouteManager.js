import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import TasksListView from '../components/TasksListView';
import EditTask from '../components/EditTask';
import Register from '../components/Register';
import Login from '../components/Login';
import history from '../browser/history';

const RouteManager = () => 
	<Router history={history}>
		<Switch>
			<Route exact path='/login' component={ Login } key="login"></Route>
      <Route exact path='/' exact component={ Dashboard } key="dashboard"></Route>
      <Route path='/tasks/' exact component={ TasksListView } key="taskslist"></Route>
      <Route path='/task/:id' exact component={ EditTask } key="edit"></Route>
      <Route path='/register' exact component={ Register } key="register"></Route>
    </Switch>
  </Router>

export default RouteManager;