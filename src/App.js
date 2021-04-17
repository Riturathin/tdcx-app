import './App.css';
import PrivateRoute from './authentication/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
    	<PrivateRoute />
    </>
  );
}

export default App;
