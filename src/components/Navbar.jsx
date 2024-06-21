import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#007bff' }}>
      <a className="navbar-brand text-white" href="/">WikiCountries</a>
    </nav>
  );
}

export default Navbar;
