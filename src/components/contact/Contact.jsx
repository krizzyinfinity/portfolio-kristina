import React, {  useContext, useRef, useState } from "react";
import Phone from "../../img/call-incoming.png";
import Email from "../../img/envelope.png";
import Marker from "../../img/marker.png";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";


export const Contact = () => {
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 
    
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9t2ha7i",
        "template_jjutr0x",
        formRef.current,
        "user_A1ycZIK8gTj4NAhtnExZG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact" style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
        <Link to="/">
          <h4 className="text" style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white", fontSize:"1.4rem", paddingLeft:"20px"}} >Back</h4>
        </Link>

        <div className="wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Let's get in touch</h1>

            <div className="contact-info">
              <div className="contact-info-item">
                <img src={Phone} alt="" className="contact-icon"  />
                +00385977145168
              </div>
              <div className="contact-info-item">
                <img src={Email} alt="" className="contact-icon" />
                kristinamouly@outlook.com
              </div>
              <div className="contact-info-item">
                <img src={Marker} alt="" className="contact-icon" />
                Zadar, Croatia
              </div>
            </div>
          </div>
          <div className="contact-right">
            <p className="contact-description">
              <b>Are we a good fit?</b> Let's find out do my skills fit your
              expectations and your needs
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />{" "}
              <br></br>
              <input type="text" placeholder="Subject" name="user_subject" />
              <br></br>
              <input type="text" placeholder="Email" name="user_email" />
              <textarea name="message" placeholder="Message" rows="5" />
              <button>Submit</button> <br />
              {done && "Your email has been sent. Thank you!"}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
