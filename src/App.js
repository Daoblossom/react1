import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/header';
import Home from './component/Home';
import Footer from './component/footer';
import Shop from './component/Shop';
import About from './component/About';
import Services from './component/Services';
import Blog from './component/Blog';
import Contact from './component/Contact';
import User from './component/User';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

import './component/assets/css/bootstrap.min.css';
import './component/assets/css/tiny-slider.css';
import './component/assets/css/style.css';

import { CartProvider } from "./component/CartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // If the item already exists in the cart, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If the item doesn't exist, add it to the cart
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update quantity of item in the cart
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } // Ensure quantity doesn't go below 1
          : item
      )
    );
  };

  // Remove item from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartProvider>
<Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Shop" render={() => <Shop addToCart={addToCart} />} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/User" component={User} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route
          exact
          path="/Cart"
          render={() => (
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          )}
        />
      </Switch>
      <Footer />
    </Router>
    </CartProvider>
    
  );
}

export default App;
