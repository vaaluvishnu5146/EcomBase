import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  syncProductData: () => {}
});

const API = "https://xkzrj7.csb.app/mocks/products.json";

export const useProduct = () => useContext(ProductContext);

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(null);

  function syncProductData() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch();
  }

  useEffect(() => {
    syncProductData();
  }, []);

  const value = {
    products,
    setProducts,
    syncProductData
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
