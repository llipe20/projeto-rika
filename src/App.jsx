import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/page/LoginPage';
import GestorPage from './components/page/GestorPage';
import MedicoPage from './components/page/MedicoPage'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')

  return (
    <Router>
      <Routes>
        <Route 
            path="/" 
            element={ <LoginPage setIsLogin={setIsLoggedIn} setUser={setUser} /> } 
        />
        <Route 
            path="/home" 
            element={
                isLoggedIn ? user === 'GESTOR' ? <GestorPage user={user} /> :  <MedicoPage user={user} /> : <Navigate to="/" replace />
            } 
        />
      </Routes>
    </Router>
  )
}

export default App;



