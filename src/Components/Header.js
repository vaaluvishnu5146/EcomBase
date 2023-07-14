import React from "react";
import { useCart } from "../Contexts/CartContext";

function Header() {
  const { cart = [] } = useCart();
  return (
    <div className="header-bar">
      <div className="cart-cta">
        <img
          alt="cart"
          className="cart-icon"
          src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
        />
        <div className="cart-count">{cart?.length || 0}</div>
      </div>
    </div>
  );
}

export default Header;
