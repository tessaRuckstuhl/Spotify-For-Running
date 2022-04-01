import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Header from './layouts/Header/Header';
import Dashboard from './pages/Dashboard';
import { ThemeProvider, useTheme } from '@emotion/react';
import darkTheme from './themes/darkTheme';

function App() {
  const theme = useTheme(darkTheme);
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-darkGray h-screen">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/welcome" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
