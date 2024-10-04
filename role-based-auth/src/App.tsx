import { useState } from 'react'
import './App.css'
import { useAuth } from './components/AuthProvider';
import { Link } from 'react-router-dom';

function App() {

  const {authToken,currentUser,handleLogin,handleLogout}=useAuth();

  return (
    <div>
      <h2>Role Based Auth</h2>
      <Link to="/protected">Protected Route</Link>
      {
        authToken? <button onClick={handleLogout}>Logout</button>:<button onClick={handleLogin}>Login</button>
      }
    </div>
  )
}

export default App
