import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ProductContextProvider from "./Contexts/ProductContext";
import CartContextProvider from "./Contexts/CartContext";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ProductContextProvider>
    <CartContextProvider>
      <Router>
        <App />
      </Router>
    </CartContextProvider>
  </ProductContextProvider>
);
