import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  setCart: () => {},
  findAddedTocart: () => {},
  handleQuantity: () => {}
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {}, []);

  function findAddedTocart(id = "") {
    const matchedItem = cart.find((d) => d.id === id);
    return matchedItem;
  }

  function handleQuantity(id = 0, type = "increment") {
    const cartCopy = [...cart];
    const matchedItem = cartCopy.find((d) => d.id === id);
    if (type === "increment") {
      matchedItem.quantity += 1;
    } else {
      matchedItem.quantity -= 1;
    }
    setCart(cartCopy);
  }

  const value = {
    cart,
    setCart,
    findAddedTocart,
    handleQuantity
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
