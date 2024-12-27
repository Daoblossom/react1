import React, { useEffect, useState } from 'react';

function Contact() {
  // State to store the image URL
  const [productImage, setProductImage] = useState('');
  const [formData, setFormData] = useState({ fname: '', lname: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  // Fetch the product image on component mount
  useEffect(() => {
    // Fetch product data from the Fake Store API
    fetch('https://fakestoreapi.com/products/13') // Fetching the first product (you can change the ID)
      .then((response) => response.json())
      .then((product) => {
        setProductImage(product.image); // Set the product image from the API
      })
      .catch((error) => console.error('Error fetching product image:', error));
  }, []);

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
        setFeedback('Message sent successfully!');
        setFormData({ fname: '', lname: '', email: '', message: '' }); // Clear form
      } else {
        setFeedback('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setFeedback('An error occurred. Please try again.');
    }

    setTimeout(() => setFeedback(''), 5000); // Clear feedback after 5 seconds
  };

  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Contact</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <a href="" className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={productImage} alt="Product" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 pb-4">
                <div className="row mb-5">
                  <div className="col-lg-4">
                    <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                      <div className="service-icon color-1 mb-4">
                        {/* SVG for location */}
                      </div>
                      <div className="service-contents">
                        <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                      <div className="service-icon color-1 mb-4">
                        {/* SVG for email */}
                      </div>
                      <div className="service-contents">
                        <p>info@yourdomain.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                      <div className="service-icon color-1 mb-4">
                        {/* SVG for phone */}
                      </div>
                      <div className="service-contents">
                        <p>+1 294 3925 3939</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="fname">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="fname"
                          value={formData.fname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="lname">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          name="lname"
                          value={formData.lname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-5">
                    <label className="text-black" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary-hover-outline">
                    Send Message
                  </button>
                </form>
                {feedback && <p className="mt-3">{feedback}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
