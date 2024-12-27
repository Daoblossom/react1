import React, { useState, useEffect } from 'react';

function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [product, setProduct] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage('Subscription successful!');
        setFormData({ name: '', email: '' }); // Clear form
      } else {
        setMessage('Subscription failed. Please try again.');
      }    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
    setTimeout(() => setMessage(''), 5000); // Clear message after 5 seconds
  };

  // Fetch product data from FakeStore API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/6'); // Fetching product with ID 1
        const data = await response.json();
        setProduct(data); // Save product data to state
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <footer className="footer-section">
      <div className="container relative">
        {/* Dynamically display the product image from FakeStore API */}
        {/* <div className="sofa-img">
          {product ? (
            <img src={product.image} alt={product.title} className="img-fluid" />
          ) : (
            <p>Loading product...</p> // Placeholder text if the product is loading
          )}
        </div> */}

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src="images/envelope-outline.svg" alt="Envelope" className="img-fluid" />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>
              {message && <p className="mt-3">{message}</p>}
            </div>
          </div>
        </div>

        {/* The rest of the footer content remains unchanged */}
        <div className="row g-5 mb-5">
          {/* ... */}
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">Furni<span>.</span></a>
            </div>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant
            </p>

            <ul className="list-unstyled custom-social">
              <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Knowledge base</a></li>
                  <li><a href="#">Live chat</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Our team</a></li>
                  <li><a href="#">Leadership</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><a href="#">Nordic Chair</a></li>
                  <li><a href="#">Kruzo Aero</a></li>
                  <li><a href="#">Ergonomic Chair</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. — Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
