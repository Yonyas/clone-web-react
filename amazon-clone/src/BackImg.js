import React from "react";
import "./BackImg.css";

function BackImg({ link, imgSrc, imgAlt }) {
  return (
    <li>
      <div className="home__imgSize">
        <div className="home__imgCenter">
          <a className="" href="/">
            {/* <a className = {link}> */}
            <img className="home__Img" src={imgSrc} alt={imgAlt}></img>
          </a>
        </div>
      </div>
    </li>
  );
}

export default BackImg;
