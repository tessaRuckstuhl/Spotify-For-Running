import React from 'react';
import Dashboard from './components/Dashboard';
import LoginBtn from './components/LoginBtn';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="bg-darkGray h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/welcome" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
