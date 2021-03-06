import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import 'font-awesome/css/font-awesome.css'
import './App.css';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' />
      </Switch>
    </Router>
    </>
  );
}

export default App;
