import { createContext } from "react";
// import { img2, img3, img4, img6, img7 } from "../assets/img";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const products = [
    {
      id:0,
      title: "Coco oil",
      // img: img6,
      category: "moisturizer",
      price: 7000,
      available: true,
    },
    {
      id:1,
      title: "Skin revival oil",
      // img: img2,
      category: "treatments",
      price: 6000,
      available: true,
    },
    {
      id:2,
      title: "Morning essentials",
      // img: img3,
      category: "sun care",
      price: 10000,
      available: true,
    },
    {
      id:3,
      title: "Skin toner",
      // img: img7,
      category: "treatments",
      price: 6000,
      available: true,
    },
    {
      id:4,
      title: "Night essentials",
      // img: img4,
      category: "night care",
      price: 10000,
      available: true,
    },
  ];
  return <ProductsContext.Provider value={products} children={children} />;
};

