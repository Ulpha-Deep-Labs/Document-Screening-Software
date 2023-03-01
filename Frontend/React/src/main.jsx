import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { CategoriesContextProvider } from "./contexts/CategoriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <CategoriesContextProvider>
          <App />
        </CategoriesContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);
