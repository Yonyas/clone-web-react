import React, { useState, useEffect, useLayoutEffect } from "react";
import "./BackImg.css";

function BackImg({ link, imgSrc, imgAlt, show, left }) {
  const [screenWidth, setScreenWidth] = useState();

  // 화면사이즈 변경할 때
  useLayoutEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenWidth]);

  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <li
      style={{
        width: `${screenWidth}px`,
        visibility: show,
      }}
    >
      <div className="home__imgSize">
        <div className="home__imgCenter">
          <a className="home__imgLink" href="/">
            <img className="home__Img" src={imgSrc} alt={imgAlt}></img>
          </a>
        </div>
      </div>
    </li>
  );
}

export default BackImg;
