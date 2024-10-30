import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <input
        type="number"
        min="1"
        max={product.stock}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button className="button" onClick={handleAddToCart} disabled={quantity > product.stock}>
        Add to Cart
      </button>
    </div>
  );
}
