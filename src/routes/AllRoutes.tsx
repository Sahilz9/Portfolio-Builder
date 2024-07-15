import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recommendation from "../pages/Recommendation";
import Theme from "../pages/Theme";
import Schedule from "../pages/Schedule";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommendation" element={<Recommendation />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};

export default AllRoutes;
