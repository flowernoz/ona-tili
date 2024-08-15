import { Routes, Route } from "react-router-dom";
import Router from "./Routes";
import { useState } from "react";
import Login from "./components/login/Login";
import Admin from "./components/admin/AdminPage";
import useScrollToTop from "./hooks/scrollToTop";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const scrollToTop = useScrollToTop();
  const handleLogin = (username, password) => {
    if (username === "hello" && password === "world") {
      setIsLoggedIn(true);
    } else {
      alert("Xatooooooooooooo");
    }
  };

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      {scrollToTop}
      <div className="max-w-screen-xl mx-auto">
        <Router />
        <Routes>
          <Route
            path="/Login"
            element={isLoggedIn ? <Admin /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
