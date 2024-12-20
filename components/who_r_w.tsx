import React from "react";

const Who_r_w = () => {
  return (
    <div className="container">
      <div className="left">
        <img src="/path-to-your-image.jpg" alt="Security Image" className="image" />
      </div>
      <div className="right">
        <h1 className="heading">
          WE DELIVER YOUR <br /> SECURITY AMBITIONS
        </h1>
        <p className="description">
          Powerful Security Solutions, Built to Protect Your Behavior.
          <br />
          From intelligent cameras to robust risk detection software, ButterTech offers an all-in-one approach to security. Whether it's monitoring your premises or detecting potential risks, our technology adapts to your needs.
        </p>
        <div className="buttons">
          <button className="contact-btn">Contact Us</button>
          <button className="discover-btn">Discover Our Services</button>
        </div>
      </div>
    </div>
  );
};

export default Who_r_w;
