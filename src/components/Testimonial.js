import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import avatar from "../images/Avator.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const Testimonial = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      className="container-fluid testimonial d-flex flex-column align-content-center "
    >
      <div className="  d-flex flex-column justify-content-center align-content-center flex-wrap ">
        <div className="d-flex  flex-column align-content-center flex-wrap mb-4 mt-5 text-center">
          <h1 className="mt-4">Our best customers</h1>
          <div className="d-flex justify-content-center">
            <button className="btn-6"></button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mt-5 justify-content-center align-content-center ">
        <div className="avatar-1 mt-3">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="vl"></div>
        <div className="d-flex flex-column testimonial-paragraph mt-3">
          <h3>Martha | Norwegian Air</h3>
          <h5>
            Recusandae sunt voluptate repellat velit dolorem eos nostrum
            cupiditate. Labore porro cupiditate reiciendis enim neque. Modi eos
            autem expedita voluptatibus dignissimos repellat. <br /> <br />
            Sit et aut minus quod vitae. Aut occaecati cupiditate neque dolore
            amet beatae quasi aliquam.
          </h5>

          <h2>Norwegian</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
