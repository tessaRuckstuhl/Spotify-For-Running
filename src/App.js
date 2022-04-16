import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages';
import Header from './layouts/Header/Header';
import Dashboard from './pages/Dashboard/dashboard';
import darkTheme from './themes/darkTheme';
import {createTheme, ThemeProvider} from '@mui/material/styles'
import About from './pages/About/about';
function App() {
  const theme = createTheme(darkTheme);
  return (
    <ThemeProvider theme={theme}>
      <div className='flex flex-col'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
