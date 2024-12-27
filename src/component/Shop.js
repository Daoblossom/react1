import React, { useEffect, useState, useContext } from 'react';
import { useCart } from './CartContext';


function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart using the CartContext's method

  };

  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
                <div className="product-item"
  style={{
    // border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#fff",
    width: "300px",
    height: "610px",
    margin: "0 auto",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  }}
>
  <div
    style={{
      width: "100%",
      height: "300px",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "15px",
    }}
  >
    <img
      src={product.image}
      className="img-fluid product-thumbnail"
      alt={product.title}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
  <h3
    className="product-title"
    style={{
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "10px",
    }}
  >
    {product.title}
  </h3>
  <strong
    className="product-price"
    style={{
      display: "block",
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "#007BFF",
      marginBottom: "15px",
    }}
  >
    ${product.price}
  </strong>
  <button
    className="btn btn-primary add-to-cart-btn"
    style={{
      backgroundColor: "#007BFF",
      borderColor: "#007BFF",
      padding: "10px 20px",
      fontSize: "1rem",
      // borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#0056b3";
      e.currentTarget.style.transform = "scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#007BFF";
      e.currentTarget.style.transform = "scale(1)";
    }}
    onClick={() => handleAddToCart(product)}
  >
    Add to Cart
  </button>
                </div>

              </div>
            ))
          ) : (
            <div className="col-12">
              <p>Loading products...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
