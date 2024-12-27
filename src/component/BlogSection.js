import React, { useEffect, useState } from "react";

function BlogSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the FakeStore API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Filter products by categories
        const electronics = data.filter(product => product.category === "electronics")[0];
        const jewelery = data.filter(product => product.category === "jewelery")[0];
        const mensClothing = data.filter(product => product.category === "men's clothing")[0];
        
        // Set the first product from each category
        setProducts([electronics, jewelery, mensClothing]);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Popular Products</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="Shop" className="more">
              View All Products
            </a>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                  />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">{product.title}</a>
                  </h3>
                  <div className="meta">
                    <span>Price: ${product.price}</span>
                    <span>Category: {product.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
