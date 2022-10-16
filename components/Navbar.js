import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/api">API </Link>
      <Link to="/about">About </Link>
    </div>
  );
};

export default Navbar;