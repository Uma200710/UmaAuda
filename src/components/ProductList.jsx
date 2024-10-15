import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`/item/${product.id}`}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
