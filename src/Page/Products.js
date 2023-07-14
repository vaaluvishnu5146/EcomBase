import React from "react";
import ProductCard from "../Components/ProductCard";
import { useProduct } from "../Contexts/ProductContext";
import { useCart } from "../Contexts/CartContext";
import Header from "../Components/Header";

function Products() {
  const { products } = useProduct();
  const { cart, setCart, findAddedTocart, handleQuantity } = useCart();

  function handleAddToCart(d = {}) {
    if (d.id) {
      let cartCopy = [...cart];
      cartCopy.push({ ...d, quantity: 1 });
      setCart(cartCopy);
    }
  }

  return (
    <div>
      <Header />
      <h1>Listing Products</h1>
      <div className="listing-container">
        {products?.map((d, i) => (
          <ProductCard
            data={d}
            key={`products-${i}-${d.id}`}
            handleAddToCart={handleAddToCart}
            isAddedToCart={findAddedTocart(d?.id)}
            handleQuantity={handleQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
