import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import pic1 from "../images/pic1.svg";
import pic2 from "../images/pic2.svg";
import pic3 from "../images/pic3.svg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const BodyLower = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="container-fluid d-flex flex-column justify-content-space align-content-center flex-wrap body-lower mt-5"
    >
      <div className="d-flex  flex-column align-content-center flex-wrap mt-5">
        <h1>How does Learnrr work?</h1>
        <div className="d-flex justify-content-center">
          <button className="btn-5"></button>
        </div>
      </div>
      <div className="d-flex flex-column  mt-5 ">
        <div className="d-flex flex-row mt-5">
          <div className="img-1 ">
            <img src={pic1} alt="" className="pic-1" />
          </div>
          <div className="d-flex flex-column heading-text  ">
            <h1>Create</h1>
            <h5>
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </h5>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column  mt-5 ">
        <div className="d-flex flex-row mt-5">
          <div className="d-flex flex-column heading-text-2 ">
            <h1>Host or share</h1>
            <h5>
              Host a live game with questions on a big screen or share a game
              with remote players.
            </h5>
          </div>
          <div className="img-1">
            <img src={pic2} alt="" className="pic-2" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column  mt-5 ">
        <div className="d-flex flex-row mt-5">
          <div className="img-3">
            <img src={pic3} alt="" className="pic-3" />
          </div>
          <div className="d-flex flex-column heading-text-3 ml-5 ">
            <h1>Play</h1>
            <h5>
              Game on! Join a kahoot with a PIN provided by the host and answer
              questions on your device.
            </h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BodyLower;
