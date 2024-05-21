import * as React from "react";
import { useState, useEffect } from "react";
import { IProduct, products as productsData } from "./ProductsData";
import { Link } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="page-container">
      <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="product-list">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <li key={product.id} className="product-list-item">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
