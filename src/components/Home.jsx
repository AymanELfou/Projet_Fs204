import React from "react";

import {Link } from "react-router-dom";

import './body.css'; // Import the CSS file for styling


function BasicExample() {
  return (

    <div className="full-screen">
    {/* Overlay Text */}
    <div className="overlay-text">
      {/* Heading */}
      <h1>
        <span style={{ "color": "#00FA9A" }}>
          <b>Experience the New Perspective</b>
        </span>
        <br />
        <b>Buying Your Dream PC</b>
      </h1><br />

      {/* Create Now Button */}
      <Link as={Link} to="/Products">
        <button className='btnCreat' type="button">
          Buy Now
        </button>
      </Link>
      {/* Buy Pre-built PC Button */}
   
    </div>
  </div>
  );
}

export default BasicExample;
