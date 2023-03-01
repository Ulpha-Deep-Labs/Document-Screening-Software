import { Route, Routes, useLocation } from "react-router-dom";

// pages
import Home from "../../pages/Home";
import Login from "../../pages/Login";

// components
import FooterSection from "./FooterSection";

// framer
import { AnimatePresence } from "framer-motion";
import SignUp from "../../pages/SignUp";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";

const AnimatedRoutes = ({
  isOpen,
  setIsOpen,
  categoriesOpen,
  setCategoriesOpen,
}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <NavBar
          setIsOpen={setIsOpen}
          categoriesOpen={categoriesOpen}
          setCategoriesOpen={setCategoriesOpen}
        />
      )}
      {!isOpen && (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}

      {/* {!isOpen && <FooterSection />} */}
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
