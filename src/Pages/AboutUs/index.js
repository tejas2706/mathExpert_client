import React, { useState } from 'react';
import face1 from '../../assets/face.png';
import face2 from '../../assets/face12.png';
import together from '../../assets/tejas_murtuza.jpeg';
import './styles.css';

function AboutUs() {
  const [name, setname] = useState('');
  const [emailId, setemailId] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [city, setcity] = useState('');
  const [message, setmessage] = useState('');

  const handleSubmit = (event) => {
    let response = { name, emailId, phoneNo, city, message };
    alert('Response was submitted');
    event.preventDefault();
  };

  return (
    <div className="aboutUs__container">
      <div className="aboutUs__innerContainer">
        <div className="aboutUs__aboutUs">
          <h1 className="aboutUs__title">About Us</h1>
          <div className="aboutUs__content">
            We,
            <img alt="tejas" src={together} className="aboutUs__image"></img>
            have created MathExpert with the intent of preparing the students
            for Olympiad exams and help them to do their best in each and every
            topic of Mathematics. We provide detailed explanation that includes
            video and audio of all sorts of problem sums categoried by the
            topics and classes.
          </div>
        </div>
        <div className="aboutUs__contactUs">
          <h1>Contact Us</h1>
          <form className="aboutUs__contactUsForm" onSubmit={handleSubmit}>
            <input
              placeholder="name"
              className="aboutUs__inputField"
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              placeholder="email Id"
              className="aboutUs__inputField"
              type="text"
              value={emailId}
              onChange={(e) => setemailId(e.target.value)}
            />
            <input
              placeholder="contact number"
              className="aboutUs__inputField"
              type="text"
              value={[phoneNo]}
              onChange={(e) => setphoneNo(e.target.value)}
            />
            <input
              placeholder="city"
              className="aboutUs__inputField"
              type="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            <textarea
              placeholder="message"
              className="aboutUs__inputField_textarea"
              type="text"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <input type="submit" className="aboutUs__submit" value="Submit" />
          </form>
          <div className="aboutUs__contactInfo_container">
            <div>
              <h1>Contact Info</h1>
            </div>
            <div className="aboutUs__contactInfo">
              <div className="aboutUs__contact">
                <h1>Tejas Lad</h1>
                <h4>emailId: tejaslad2706@gmail.com</h4>
                <h4>Contact No.: 9326715244</h4>
                <img
                  alt="tejas"
                  src={face1}
                  className="aboutUs__imageDetails"></img>
              </div>
              <div className="aboutUs__contact">
                <h1>Murtuza Bagasrawala</h1>
                <h4>emailId: murtuzabagasrawala@gmail.com</h4>
                <h4>Contact No.: 8104913157</h4>
                <img
                  src={face2}
                  alt="murtuza"
                  className="aboutUs__imageDetails"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
