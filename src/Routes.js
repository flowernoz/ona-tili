import { Route, Routes } from "react-router-dom";
import Features from "./components/features/Features";
import Bayon from "./pages/bayon/Bayon";
import Diktant from "./pages/diktant/Diktant";
import Esse from "./pages/esse/Esse";
import Header from "./components/header/Header";
import Letters from "./pages/h-x";

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
      </Routes>
    </div>
  );
}

export default Router;
