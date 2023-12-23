import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
            <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Tm</div>
        <span  style={{color: darkMode?'white':''}}>Tamazight </span>
        <span>Maternell</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Ar</div>
        <span  style={{color: darkMode?'white':''}}>Arabe </span>
        <span>Courant</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Fr</div>
        <span  style={{color: darkMode?'white':''}}>Francais</span>
        <span>Moyen</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>En</div>
        <span  style={{color: darkMode?'white':''}}>English </span>
        <span>Bon </span>
      </div>
    </div>
  );
};

export default Experience;
