import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../images/icon.png";
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import icon3 from "../images/icon-3.png";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const BodyTop = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="container-fluid d-flex flex-column justify-content-center align-content-center flex-wrap body-top "
    >
      <div className="d-flex  flex-column align-content-center flex-wrap upper-row ">
        <h1>Who is Learnrr for?</h1>
        <div className="d-flex justify-content-center">
          <button className="btn-5"></button>
        </div>
        {/* <hr className="new5" /> */}
      </div>
      <div className="container d-flex flex-row lower-row mt-5 ">
        <div className="d-flex flex-column each-col ">
          <img src={icon} alt="" />
          <h4>At School</h4>
          <h6>
            Engaging group and distance learning for teachers and students
          </h6>
          <h5>Learn more</h5>
        </div>
        <div className="d-flex flex-column each-col ">
          <img src={icon1} alt="" />
          <h4>At work</h4>
          <h6>For training, e-learning, interactive presentation and more</h6>
          <h5>Learn more</h5>
        </div>
        <div className="d-flex flex-column each-col ">
          <img src={icon2} alt="" />
          <h4>At home</h4>
          <h6>Apps and games for family fun or home study</h6>
          <h5>Learn more</h5>
        </div>
        <div className="d-flex flex-column each-col-1 ">
          <img src={icon3} alt="" />
          <h4>Learning apps</h4>
          <h6>Engage kid with the kahoot! family of learning apps</h6>
          <h5>Learn more</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn-3">SIGN UP NOW</button>
      </div>
    </motion.div>
  );
};

export default BodyTop;
