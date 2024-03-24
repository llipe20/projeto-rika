import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/page/LoginPage';
import HomePage from './components/page/HomePage';


const App = () => {
  const isLoggedIn = false 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  )
}

export default App;

