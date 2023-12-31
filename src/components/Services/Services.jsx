import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import framework from "../../img/framework.png";
import TechnologieWeb from "../../img/TechnologieWeb.png";
import database from "../../img/database.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import CvFatimaOuali from './CvFatimaOuali.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Compétences</span>
        <span>Langage:</span>
        <spane>
        PHP, Python
        {/* <br /> */}
        </spane>
        <a href={CvFatimaOuali} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={framework}
            heading={"Framework"}
            detail={"Laravel, React"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={TechnologieWeb}
            heading={"Technologie web"}
            detail={"HTML, CSS, JAVASCRIPT, BOOTSTRAP"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={database}
            heading={"SGBD"}
            detail={
              "SQL, MYSQL , MONGODB"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
