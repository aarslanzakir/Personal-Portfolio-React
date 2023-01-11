import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card"> 
      <img src={emoji} alt="" />
      <span style={{color:'var(--pomgrante)'}}>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
