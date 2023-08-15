import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`) // Correct endpoint URL
      .then((response) => response.json())
      .then((data) => setProducts(data)); // Update products with filtered products
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-4">Our Products</h2>
      <div className="container">
        

        <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-info text-dark bg-light" onClick={() => getProducts()}>
          All
        </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="btn  text-dark bg-light"
              style={{ color: "#8D6B4A" }}
              onClick={() => getProductInCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
