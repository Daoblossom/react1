import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hero() {
  const [product, setProduct] = useState(null);

  // Fetch the product data when the component mounts
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/13') // Fetch product1 from the FakeStore API
      .then(response => {
        setProduct(response.data); // Set the product data to state
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  // Show a loading message while the product is being fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                Modern Interior <span className="d-block">Design Studio</span>
              </h1>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
                dolor tempor tristique.
              </p>
              <p>
                <a href="Shop" className="btn btn-secondary me-2">
                  Shop Now
                </a>
                <a href="Services" className="btn btn-white-outline">
                  Explore
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src={product.image} className="img-fluid" alt={product.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
