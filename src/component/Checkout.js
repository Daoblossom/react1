import React, { useState } from 'react';

const Checkout = () => {
  const [cartItems] = useState([
    { name: "Top Up T-Shirt", price: 250, quantity: 1 },
    { name: "Polo Shirt", price: 100, quantity: 1 },
  ]);
  
  const [formData, setFormData] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    notes: '',
    couponCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you could implement the logic to send the data to an API or handle further steps.
  };

  const getOrderTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout">
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Checkout</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="border p-4 rounded" role="alert">
                  Returning customer? <a href="#">Click here</a> to login
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <div className="form-group">
                    <label htmlFor="country" className="text-black">
                      Country <span className="text-danger">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                      value={formData.country}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a country</option>
                      <option value="bangladesh">Bangladesh</option>
                      <option value="algeria">Algeria</option>
                      <option value="afghanistan">Afghanistan</option>
                    </select>
                  </div>

                  {/* Other form fields (First Name, Last Name, Address, etc.) */}
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="text-black">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="text-black">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Other required fields for address, email, etc. */}
                  <div className="form-group">
                    <label htmlFor="address" className="text-black">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="text-black">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="text-black">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Order Notes */}
                  <div className="form-group">
                    <label htmlFor="notes" className="text-black">
                      Order Notes
                    </label>
                    <textarea
                      name="notes"
                      id="notes"
                      className="form-control"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Write your notes here..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2 className="h3 mb-3 text-black">Your Order</h2>
                    <div className="p-3 p-lg-5 border bg-white">
                      <table className="table site-block-order-table mb-5">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item, index) => (
                            <tr key={index}>
                              <td>{item.name} <strong className="mx-2">x</strong> {item.quantity}</td>
                              <td>${item.price * item.quantity}</td>
                            </tr>
                          ))}
                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Cart Subtotal</strong>
                            </td>
                            <td className="text-black">${getOrderTotal()}</td>
                          </tr>
                          <tr>
                            <td className="text-black font-weight-bold">
                              <strong>Order Total</strong>
                            </td>
                            <td className="text-black font-weight-bold">
                              <strong>${getOrderTotal()}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="form-group">
                        <button type="submit" className="btn btn-black btn-lg py-3 btn-block">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
