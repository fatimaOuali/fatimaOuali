import React, { useContext } from "react";
import "./Works.css";
import mysql from "../../img/mysql.png";
import laravel from "../../img/laravel.png";
import fintic from "../../img/fintic.png";
import image from "../../img/image.png";
import video from "../../img/video.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Expérience
          </span>
          <span>2023</span>
          <spane>
          J'ai réussi une période de formation de trois mois 
          <br />
          chez l'entreprise Fintic à Agadir, où j'ai conçu 
          <br />
          un site de commerce électronique en utilisant Laravel.
          <br />
           De plus, j'ai créé des images et des vidéos promotionnelles.<br />
           <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={mysql} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={laravel} alt="" />
          </div>
          <div className="w-secCircle">
            <img id="fintic" src={fintic} alt="" />
          </div>{" "}
          <div className="w-secCircle" >
            <img src={image} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={video} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
