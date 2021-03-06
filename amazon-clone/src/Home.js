import React, { useState, useEffect } from "react";
import "./home.css";
import BackImg from "./BackImg";
import background1 from "./images/sub/background1.jpg";
import background2 from "./images/sub/background2.jpg";
import background3 from "./images/sub/background3.jpg";
import background4 from "./images/sub/background4.jpg";
import background5 from "./images/sub/background5.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Home() {
  const [Xcoord, setXcoord] = useState(0);
  const [counter, setCounter] = useState(0);
  const [arrowPosition, setArrowPosition] = useState(26);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const onClickNext = (e) => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onClickPrev = (e) => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  useEffect(() => {
    console.log(counter);
    if (counter > 4) {
      setCounter(0);
    } else if (counter < 0) {
      setCounter(4);
    }
    setXcoord(window.innerWidth * counter);
  }, [counter]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    setArrowPosition(
      screenWidth > 1500 ? (window.innerWidth - 1500) / 2 + 30 : 30
    );

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenWidth]);

  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <div className="home">
      <div className="home__arrow">
        <a onClick={onClickPrev} style={{ left: `${arrowPosition}px` }}>
          <ArrowBackIosIcon className="arrow back__arrow" />
        </a>
        <a
          onClick={onClickNext}
          style={
            screenWidth > 1000
              ? { right: `${arrowPosition}px` }
              : { right: null, left: "916px" }
          }
        >
          <ArrowForwardIosIcon className="arrow forward__arrow" />
        </a>
      </div>
      <ol
        className="home__imgSlide"
        style={{ transform: `translateX(-${Xcoord}px)` }}
      >
        {/* list component - <a className>, <img background, alt> */}
        <BackImg
          link=""
          imgSrc={background1}
          imgAlt="background1 - ship over 45 million products around the world"
        />
        <BackImg
          link=""
          imgSrc={background2}
          imgAlt="background2 - Discover our beauty selection"
        />
        <BackImg
          link=""
          imgSrc={background3}
          imgAlt="background3 - Shop computers and accessories"
        />
        <BackImg
          link=""
          imgSrc={background4}
          imgAlt="background4 - Refresh your space"
        />
        <BackImg
          link=""
          imgSrc={background5}
          imgAlt="background5 - Shop toys and games"
        />
      </ol>
    </div>
  );
}

export default Home;
