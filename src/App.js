import React from 'react';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './layouts/Header/Header';

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
