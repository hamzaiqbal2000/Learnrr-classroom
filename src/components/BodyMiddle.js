import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Logo2.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const BodyMiddle = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="container-fluid d-flex flex-column justify-content-center align-content-center flex-wrap body-middle mt-5">
        <div className="d-flex  flex-column align-content-center flex-wrap  text-center mt-5">
          <h1>Do you have a game code?</h1>
          <h5>Let’s play for a while!</h5>
        </div>
      </div>
      <div className=" d-flex flex-column justify-content-center align-content-center flex-wrap section-12 mt-4  ">
        <div className="d-flex flex-row logo-h4">
          <img src={logo} alt="" />
          <h4>Learnrr Classroom</h4>
        </div>
        <div className="d-flex flex-column justify-content-center align-content-center flex-wrap input-body">
          <input
            type="text"
            placeholder="   Enter your code                                   >"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BodyMiddle;
