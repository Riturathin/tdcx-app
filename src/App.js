import './App.css';
import { useState, useEffect } from 'react';
import PrivateRoute from './authentication/PrivateRoute';
import RouteManager from './routes/RouteManager';
import Home from './components/Home';

function App() {
  return (
    <>
    	<RouteManager />
    </>
  );
}

export default App;
