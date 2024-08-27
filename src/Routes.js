import { Route, Routes } from "react-router-dom";
import Features from "./components/features/Features";
import Bayon from "./pages/bayon/Bayon";
import Diktant from "./pages/diktant/Diktant";
import Esse from "./pages/esse/Esse";
import Header from "./components/header/Header";
import Letters from "./pages/h-x";
import Mashq from "./pages/mashq";
import Login from "./pages/login/Login";
import AdminPage from "./pages/admin/AdminPage";
import Faol from "./pages/faol";

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Features />} />
        <Route path="/diktantlar" element={<Diktant />} />
        <Route path="/esselar" element={<Esse />} />
        <Route path="/bayonlar" element={<Bayon />} />
        <Route path="/harflar" element={<Letters />} />
        <Route path="/mashqlar" element={<Mashq />} />
        <Route path="/faol-so'zlar" element={<Faol />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default Router;
