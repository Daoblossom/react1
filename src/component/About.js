import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
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
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>About Us</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                  vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <a href="#" className="btn btn-secondary me-2">
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
                {/* Dynamically display the image from the API */}
                <img src={product.image} alt={product.title} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique.
              </p>
              <div className="row my-5">
                {[
                  {
                    icon: "images/truck.svg",
                    title: "Fast & Free Shipping",
                    description:
                      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
                  },
                  {
                    icon: "images/bag.svg",
                    title: "Easy to Shop",
                    description:
                      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
                  },
                  {
                    icon: "images/support.svg",
                    title: "24/7 Support",
                    description:
                      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
                  },
                  {
                    icon: "images/return.svg",
                    title: "Hassle Free Returns",
                    description:
                      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
                  },
                ].map((feature, index) => (
                  <div className="col-6 col-md-6" key={index}>
                    <div className="feature">
                      <div className="icon">
                        <img src={feature.icon} alt={feature.title} className="img-fluid" />
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="images/why-choose-us-img.jpg"  // Keeping this static or you can change it to dynamic
                  alt="Why Choose Us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Section */}

      {/* Team Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="row">
            {[
              {
                img: "images/person_1.jpg",
                name: "Lawson Arnold",
                position: "CEO, Founder, Atty.",
                description:
                  "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
              },
              {
                img: "images/person_2.jpg",
                name: "Jeremy Walker",
                position: "CEO, Founder, Atty.",
                description:
                  "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
              },
              {
                img: "images/person_3.jpg",
                name: "Patrik White",
                position: "CEO, Founder, Atty.",
                description:
                  "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
              },
              {
                img: "images/person_4.jpg",
                name: "Kathryn Ryan",
                position: "CEO, Founder, Atty.",
                description:
                  "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
              },
            ].map((teamMember, index) => (
              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={index}>
                <img src={teamMember.img} alt={teamMember.name} className="img-fluid mb-5" />
                <h3>
                  <a href="#">
                    <span>{teamMember.name}</span>
                  </a>
                </h3>
                <span className="d-block position mb-4">{teamMember.position}</span>
                <p>{teamMember.description}</p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Team Section */}

      {/* Testimonials Section */}
      <div className="testimonial-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                  <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                </div>

                <div className="testimonial-slider">
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 

                  {/* Add more testimonials as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
