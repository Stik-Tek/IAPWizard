// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-dom';
import SignIn from './components/Auth/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
          {/* Other components, routes, and navigation can be added here */}
          <HomePage />
        </div>
      );
}

export default App;
