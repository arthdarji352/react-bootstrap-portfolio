import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed-top">
      <div className="d-flex bg-danger">
        <div className="p-4 flex-grow-1 bd-highlight">
          <Link to="/" className="text-decoration-none text-light">
            Home
          </Link>
        </div>

        <div className="p-4">
          <Link to="/about" className="text-decoration-none text-light">
            About
          </Link>
        </div>
        <div className="p-4">
          <Link to="/service" className="text-decoration-none text-light">
            Services
          </Link>
        </div>
        <div className="p-4">
          <Link to="/project" className="text-decoration-none text-light">
            Project
          </Link>
        </div>
        <div className="p-4">
          <Link to="/contact" className="text-decoration-none text-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
