import { createContext } from "react";

import {
  ShoppingBagIcon,
  ArrowTrendingUpIcon,
  Square3Stack3DIcon,
  EyeIcon,
  ShieldCheckIcon,
  BeakerIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const categories = [
    { title: "on sale", icon: ShoppingBagIcon },
    { title: "featured", icon: ArrowTrendingUpIcon },
    { title: "masks", icon: Square3Stack3DIcon },
    { title: "eye care", icon: EyeIcon },
    { title: "Treatments", icon: ShieldCheckIcon },
    { title: "Moisturizer", icon: BeakerIcon },
    { title: "Night care", icon: MoonIcon },
    { title: "sun care", icon: SunIcon },
  ];
  return <CategoriesContext.Provider value={categories} children={children} />;
};
