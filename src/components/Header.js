import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import headerImg from "../images/pic.jpg";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const Header = () => {
  return (
    <div className="container d-flex flex-row header">
      <div className="d-flex flex-column header-col-1">
        <motion.h1 variants={titleAnim}>Make Learning fun!</motion.h1>

        <motion.h5 variants={fade}>
          Any subject, in any language, on any device, for all ages!
        </motion.h5>
        <motion.button variants={fade} className="btn-4">
          Sign up for free
        </motion.button>
      </div>
      <div className="img-12">
        <motion.img variants={photoAnim} src={headerImg} alt="" />
      </div>
      <Wave />
    </div>
  );
};

export default Header;
