import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Product List</h1>
      <ul>
        <li>
          <Link to="/products/1">A Book</Link>
        </li>
        <li>
          <Link to="/products/2">A Table</Link>
        </li>
        <li>
          <Link to="/products/3">A Beer</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
