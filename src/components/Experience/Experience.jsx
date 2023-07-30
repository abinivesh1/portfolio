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
        <span style={{ color: darkMode ? "white" : "" }}>Academic</span>
        <span>Qualifications</span>
       
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8.11</div>
        <span  style={{color: darkMode?'white':''}}>BE in Computer Science(pursuing)</span>
        <span>CGPA</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>72.6</div>
        <span  style={{color: darkMode?'white':''}}>Higher Secondary Education</span>
        <span>Percentage</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>92.2</div>
        <span  style={{color: darkMode?'white':''}}>Secondary Education</span>
        <span>Percentage</span>
      </div>
    </div>
  );
};

export default Experience;
