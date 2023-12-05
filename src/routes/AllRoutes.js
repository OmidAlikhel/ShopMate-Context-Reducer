import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../pages/index";
import "../App.css";

export const AllRoutes = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
