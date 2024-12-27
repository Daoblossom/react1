import React, { useContext } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
// import Payment from './Payment';

import Paypal from './transitionpaypal/Paypal';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
  };

  if (!cartItems.length) {
    return (
      <div className="text-center my-20">
        <p>Your cart is empty!</p>
        <Link to="/shop" className="mt-4 text-indigo-600">
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center">Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{ width: '100px', height: '100px' }}
                />
              </td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    &minus;
                  </button>
                  <input
                    type="number"
                    className="form-control mx-2 text-center"
                    style={{ width: '60px' }}
                    value={item.quantity}
                    // onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10) || 1)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row justify-content-end">
        <div className="col-md-4">
          <h4>Cart Totals</h4>
          <p>Subtotal: ${total.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
          <Paypal total={total} />
          {/* <button
            className="btn btn-success btn-block"
            onClick={handleCheckout}
          >
            Proceed To Checkout
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
