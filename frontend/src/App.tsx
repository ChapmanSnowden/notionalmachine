import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Activities from './pages/Activities';
import ActivityDetails from './pages/ActivityDetails';
import Goals from './pages/Goals';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
