import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <Link to={`/item/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
 