import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Logo.png";
import menu from "../images/Group-16.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid d-flex flex-row ">
      <div className="d-flex flex-row logo">
        <img src={logo} alt="" />
        <h4>Learnrr Classroom</h4>
      </div>
      <div className="btns d-flex flex-row">
        <h6>
          <Link to="/">Home</Link>
        </h6>
        <h6>
          <Link to="/findatutor">Find a tutor</Link>
        </h6>
        <button className="btn-1">
          <Link to="/findatutor">Sign up</Link>
        </button>
        <button className="btn-2">
          <Link to="/findatutor">Log in</Link>
        </button>
        <img src={menu} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
