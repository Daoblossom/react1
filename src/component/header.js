import React from "react";
import {useCart} from "./CartContext"

function Header() {
  const {cartItems} = useCart();
  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Furni<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contact">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-item">
              <a className="nav-link" href="User">
                <img src="images/user.svg" alt="User" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Cart">
              <img src="images/cart.svg" alt="Cart" />
<span
  style={{
    fontSize: "15px",
    color: "white",
    backgroundColor: "#dd4b77",
    borderRadius: "50%",
    padding: "5px 8px",
    marginLeft: "5px",
    // display: "inline-block",
    minWidth: "30px",
    textAlign: "center",
  }}
>
  {cartItems.length}
</span>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
