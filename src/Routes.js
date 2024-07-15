import { Route, Routes } from "react-router-dom";
import Features from "./components/features/Features";
import Bayon from "./pages/bayon/Bayon";
import Diktant from "./pages/diktant/Diktant";
import Esse from "./pages/esse/Esse";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Features/>}/>
        <Route path="diktantlar" element={<Diktant />} />
        <Route path="esselar" element={<Esse />} />
        <Route path="bayonlar" element={<Bayon />} />
      </Routes>
    </div>
  );
}

export default Router;
