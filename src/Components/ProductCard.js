import React from "react";

function ProductCard({
  data = {},
  handleAddToCart = () => {},
  isAddedToCart = {},
  handleQuantity = {}
}) {
  return (
    <div className="item">
      <div className="img-box">
        <img src={data?.images[0]} alt="Awesome Sunglasses" />
      </div>
      <div className="details">
        <h2>
          {data?.title}
          <br />
          <span>Men's Collection</span>
        </h2>
        <div className="price">{data?.price}$</div>
        {isAddedToCart?.id ? (
          <div>
            <button onClick={() => handleQuantity(data?.id, "decrement")}>
              -
            </button>
            <p>{isAddedToCart.quantity}</p>
            <button onClick={() => handleQuantity(data?.id, "increment")}>
              +
            </button>
          </div>
        ) : (
          <button onClick={(e) => handleAddToCart(data)}>Add to cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
