import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard'
import Login from './components/Login';
function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
