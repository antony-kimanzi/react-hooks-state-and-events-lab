import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle the inCart state
  const handleCartToggle = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;