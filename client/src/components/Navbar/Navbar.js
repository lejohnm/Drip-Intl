import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Navbar(props) {
  return (

    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <span className="navbar-brand" to="/">
          <span className="logo-text">DRIP</span>
          <span className="logo-text2">INTL.</span>
          <span className="sr-only">(current)</span>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link className="nav-link" to="/">
              <li className="nav-item active">

                Home
                <span className="sr-only">(current)</span>
              </li>
            </Link>



            <Link className="nav-link" to="/contact">
              <li className="nav-item">Contact</li>
            </Link>




            <Link
              className="nav-link"
              to="/products"
           >
              <li>
                Shop
                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="list-group-item" href="#tops" onClick={() => props.onChange('tops')}>Tops</a>
            <a className="list-group-item" href="#bottoms" onClick={() => props.onChange('bottoms')}>Bottoms</a>
            <a className="list-group-item" href="#shoes" onClick={() => props.onChange('shoes')}>Shoes</a>
          </div>
          </li>
            </Link>
          </ul>

          



        </div>
      </nav>

    
    </div>

  );
}

export default Navbar;