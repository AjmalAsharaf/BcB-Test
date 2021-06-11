import React from 'react'
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './Home';
import PrivateRoute from './components/api/PrivateRoute'
function App() {
  return (
    <div className="App">
          <Router>
        

        
        <PrivateRoute path='/' component={Home} exact/>
          <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>
        </Router>
      
    </div>
  );
}

export default App
