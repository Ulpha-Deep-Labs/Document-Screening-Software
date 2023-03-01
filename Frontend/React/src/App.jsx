import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

// pages
import AnimatedRoutes from "./components/app/AnimatedRoutes";

// components
import Toolbar from "./components/app/Toolbar";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const { dispatch } = useContext(CartContext);
  useEffect(() => {
    dispatch({ type: "Set" });
  }, []);
  return (
    <BrowserRouter>
      <Toolbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        categoriesOpen={categoriesOpen}
        setCategoriesOpen={setCategoriesOpen}
      />

      <AnimatedRoutes
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        categoriesOpen={categoriesOpen}
        setCategoriesOpen={setCategoriesOpen}
      />
    </BrowserRouter>
  );
}

export default App;
