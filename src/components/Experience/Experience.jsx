import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
<>

    <div className="experience" id='experience'>
    
      
     
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>11+</div>
        <span  style={{color: darkMode?'white':''}}>completed UI </span>
        <span>React Projects</span>
       
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>MERN Projects</span>
      </div>


  
    </div>
    </>
  );
};

export default Experience;
