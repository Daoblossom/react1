import React, { useEffect, useState } from "react";

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the FakeStore API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 3))) // Limit to 3 products
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <a href="Shop" className="btn">
                Explore
              </a>
            </p>
          </div>
          {/* End Column 1 */}

          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              {/* Start Product Column */}
              <a className="product-item" href="cart.html"
              style={{
                // border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#fff",
                width: "300px",
                height: "510px",
                margin: "0 auto",
              }}>
                <img
                  src={product.image}
                  className="img-fluid product-thumbnail"
                  alt={product.title}
                />
                <h3 className="product-title">{product.title}</h3>
                <strong className="product-price">${product.price}</strong>
                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt="Cross Icon" />
    
                  
                </span>
              </a>
              {/* End Product Column */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
