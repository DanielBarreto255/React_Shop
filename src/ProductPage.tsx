import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct, products } from "./ProductsData";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (id) {
      const productId: number = parseInt(id, 10);
      const selectedProduct = products.find((p) => p.id === productId);
      if (selectedProduct) {
        setProduct(selectedProduct);
      }
    }
  }, [id]);

  const handleAddClick = () => {
    // Add logic for adding product to basket
    setAdded(true);
  };

  return (
    <div className="page-container">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="product-price">
            {new Intl.NumberFormat("en-US", {
              currency: "USD",
              style: "currency",
            }).format(product.price)}
          </p>
          {!added && <button onClick={handleAddClick}>Add to basket</button>}
        </>
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  );
};

export default ProductPage;
