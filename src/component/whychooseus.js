import React, { useEffect, useState } from "react";

function WhyChooseUs() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch a single product from the FakeStore API
    fetch("https://fakestoreapi.com/products/14") // Fetch product with id 1
      .then((response) => response.json())
      .then((data) => setProduct(data)) // Set the product data to state
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  if (!product) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose This Product</h2>
            <p>
              {product.description}
            </p>

            <div className="row my-5">
              {/* Feature 1: Fast & Free Shipping */}
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/truck.svg" alt="Fast & Free Shipping" className="img-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>Enjoy free shipping on all orders, delivered directly to your doorstep.</p>
                </div>
              </div>

              {/* Feature 2: Easy to Shop */}
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/bag.svg" alt="Easy to Shop" className="img-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>Browse through a seamless shopping experience, available at your fingertips.</p>
                </div>
              </div>

              {/* Feature 3: 24/7 Support */}
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/support.svg" alt="24/7 Support" className="img-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>We are always here to assist you, with round-the-clock customer support.</p>
                </div>
              </div>

              {/* Feature 4: Hassle Free Returns */}
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="images/return.svg" alt="Hassle Free Returns" className="img-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>Enjoy a simple and easy return policy for all products purchased.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img src={product.image} alt={product.title} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
