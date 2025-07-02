import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import TodoApp from './TodoApp'; // Your Todo list UI logic

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Called after login/signup
  const handleAuthSuccess = (token, user) => {
    setToken(token);
    setUser(user);
    navigate('/todos'); // 🔁 redirect
  };

  // ✅ Logout logic
  const handleLogout = () => {
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route
        path="/login"
        element={<Login onLogin={handleAuthSuccess} />}
      />
      <Route
        path="/signup"
        element={<Signup onSignup={handleAuthSuccess} />}
      />

      {/* 🔒 Protected Route */}
      <Route
        path="/todos"
        element={
          token ? (
            <TodoApp token={token} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* 🌐 Default to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
