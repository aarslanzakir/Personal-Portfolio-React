import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          </div>
          
          </div> 
          <div className="c-right">
           <span> <span style={{color:'var(--pomgrante)'}}>Email:</span> aliarslanzakir@gmail.com</span>
           <span> <span style={{color:'var(--pomgrante)'}}>Whatsapp:</span> +923004449205</span>

          </div>   
          
          </div>     
    
  );
};

export default Contact;
