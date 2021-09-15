import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Logo2.png";

const Footer = () => {
  return (
    <div className="footer d-flex flex-row">
      <div className="d-flex flex-row logo-h4">
        <img src={logo} alt="" />
        <h4>Learnrr Classroom</h4>
      </div>

      {/* columns */}
      <div className="d-flex flex-column col-123">
        <h4>About</h4>
        <h5>Compnay</h5>
        <h5>Leadership</h5>
        <h5>Jobs-HIRING!</h5>
        <h5>Pricing</h5>
        <h5>Press</h5>
        <h5>Investors</h5>
      </div>
      <div className="d-flex flex-column col-123">
        <h4>Solutions</h4>
        <h5>At School</h5>
        <h5>At Work</h5>
        <h5>At Home</h5>
      </div>
      <div className="d-flex flex-column col-123">
        <h4>Resources</h4>
        <h5>Study with learnrr</h5>
        <h5>Blog</h5>
        <h5>Learnrr Certified</h5>
        <h5>Help center</h5>
        <h5>Library</h5>
        <h5>Shop</h5>
        <h5>Safety center</h5>
      </div>
      <div className="d-flex flex-column col-123">
        <h4>Terms and conditions</h4>
        <h5>Terms and conditions</h5>
        <h5>Privacy Policy</h5>
        <h5>Pakistan Privacy Laws</h5>
        <h5>Children's Privacy Policy</h5>
        <h5>Inclusion and Assessibility policy</h5>
        <h5></h5>
      </div>
    </div>
  );
};

export default Footer;
