import React from "react";
import "./Experience.css";
const Experience = () => {
 
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle">3+</div>
        <span >years </span>
        <span style={{color:'var(--pomgrante)'}}>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >20+</div>
        <span>completed </span>
        <span style={{color:'var(--pomgrante)'}}>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span >companies </span>
        <span style={{color:'var(--pomgrante)'}}>Work</span>
      </div>
    </div>
  );
};

export default Experience;
