import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to='/'>Armando</Link>
      <Link to='/category/category1'>Category 1</Link>
      <Link to='/category/category2'>Category 2</Link>
    </nav>
  );
}

export default NavBar;
