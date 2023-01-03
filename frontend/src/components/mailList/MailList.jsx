import React from "react";
import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <h2 className="mailDesc">Sign up and we'll send the best deals to you</h2>
      <div className="mailContainer">
        <input
          className="mailInput"
          type="text"
          placeholder="Your email address"
        />
        <button className="mailBtn">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
