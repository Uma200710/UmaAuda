import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="item">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>Stock: {item.stock}</p>
      </div>
    </Link>
  );
}
