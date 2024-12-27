import React, { useState, useEffect } from 'react';

function Services() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetching product data from the Fake Store API
    fetch('https://fakestoreapi.com/products/13')
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log('Error fetching product:', error));
  }, []);

  // Wait for the product data to be fetched before rendering
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Services</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <a href="" className="btn btn-secondary me-2">Shop Now</a>
                  <a href="#" className="btn btn-white-outline">Explore</a>
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

      <div className="why-choose-section">
        <div className="container">
          <div className="row my-5">
            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img src="images/truck.svg" alt="Image" className="img-fluid"/>
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img src="images/bag.svg" alt="Image" className="img-fluid"/>
                </div>
                <h3>Easy to Shop</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img src="images/support.svg" alt="Image" className="img-fluid"/>
                </div>
                <h3>24/7 Support</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img src="images/return.svg" alt="Image" className="img-fluid"/>
                </div>
                <h3>Hassle Free Returns</h3>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <p><a href="#" className="btn">Explore</a></p>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img src={product.image} className="img-fluid product-thumbnail" alt={product.title}/>
                <h3 className="product-title">{product.title}</h3>
                <strong className="product-price">${product.price}</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid"/>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img src="images/product-2.png" className="img-fluid product-thumbnail"/>
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid"/>
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img src="images/product-3.png" className="img-fluid product-thumbnail"/>
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add more content as needed */}
    </div>
  );
}

export default Services;
