import { Routes, Route } from "react-router-dom";
import Router from "./Routes";
import React, { useState } from 'react';
import Login from './components/login/Login';
import Admin from "./components/admin/AdminPage";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'hello' && password === 'world') {
      setIsLoggedIn(true);
    } else {
      alert('Xatooooooooooooo');
    }
  };



  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto"></div>
      <div className="max-w-screen-xl mx-auto">
        <Router />
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      {isLoggedIn ? <Admin /> : <Login onLogin={handleLogin} />}
    </div>

    
  );
}

export default App;
