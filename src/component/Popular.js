import React, { useEffect, useState } from 'react';

function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the FakeStore API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 3))) // Limiting to 3 products
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="popular-product">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
