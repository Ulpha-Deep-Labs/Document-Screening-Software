import { createContext, useReducer } from "react";
// import { img2, img3, img4, img6, img7 } from "../assets/img";
import { total } from "../functions/total";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    let newCart = state.cart;

    const updateFunc = (item) => {
      newCart[newCart.indexOf(item ? item : action.payload.product)].qty =
        Number(action.payload.qty);
      newCart.forEach((product) => {
        product.amount = product.qty * product.price;
      });
      return {
        cart: newCart,
        totalAmount: total(state.cart),
      };
    };

    switch (action.type) {
      case "Add":
        if (newCart.find((e) => e.title === action.payload.product.title)) {
          return updateFunc(
            newCart.find((e) => e.title === action.payload.product.title)
          );
        } else {
          let product = { ...action.payload.product, qty: action.payload.qty };
          console.log(product);
          newCart.push(product);
          newCart.forEach((product) => {
            product.amount = product.qty * product.price;
          });
          return {
            cart: newCart,
            totalAmount: total(state.cart),
          };
        }
        break;
      case "Update":
        return updateFunc();
        break;
      case "Delete":
        newCart = newCart.filter(
          (product) => product.title != action.payload.title
        );
        return {
          cart: newCart,
          totalAmount: total(newCart),
        };

        break;
      case "Clear":
        newCart = [];
        return {
          cart: newCart,
          totalAmount: total(newCart),
        };

        break;

      case "Set":
        newCart.forEach((product) => {
          product.amount = product.qty * product.price;
        });
        return { cart: newCart, totalAmount: total(state.cart) };
        break;

      default:
        return { cart: state.cart, totalAmount: state.totalAmount };
        break;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [
      {
        id: 0,
        title: "Coco oil",
        // img: img6,
        category: "moisturizer",
        price: 7000,
        available: true,
        qty: 1,
      },
      {
        id: 1,
        title: "Skin revival oil",
        // img: img2,
        category: "treatments",
        price: 16000,
        available: true,
        qty: 2,
      },
      {
        id: 2,
        title: "Morning essentials",
        // img: img3,
        category: "sun care",
        price: 10000,
        available: true,
        qty: 1,
      },
      {
        id: 3,
        title: "Skin toner",
        // img: img7,
        category: "treatments",
        price: 6000,
        available: true,
        qty: 3,
      },
      {
        id: 4,
        title: "Night essentials",
        // img: img4,
        category: "night care",
        price: 10000,
        available: true,
        qty: 1,
      },
    ],
    totalAmount: 0,
  });
  return (
    <CartContext.Provider value={{ state, dispatch }} children={children} />
  );
};
