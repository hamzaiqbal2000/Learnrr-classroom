import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import pic4 from "../images/pic4.svg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const BodyEnd = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      className="container-fluid body-end d-flex flex-row justify-content-center align-content-center"
    >
      <div className="image-1">
        <img src={pic4} alt="pic4" />
      </div>
      <div className="d-flex flex-column">
        <h1>Ready to make learning fun? </h1>
        <button className="btn-4">Sign up for free</button>
      </div>
    </motion.div>
  );
};

export default BodyEnd;
