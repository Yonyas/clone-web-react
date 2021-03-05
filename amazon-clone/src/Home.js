import React, { useState, useEffect } from "react";
import "./home.css";
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

  const onClickNext = (e) => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onClickPrev = (e) => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  useEffect(() => {
    console.log(counter);
    setXcoord(window.innerWidth * counter);
  }, [counter]);

  return (
    <div className="home">
      <div className="home__arrow">
        <a onClick={onClickPrev}>
          <ArrowBackIosIcon className="arrow back__arrow" />
        </a>
        <a onClick={onClickNext}>
          <ArrowForwardIosIcon className="arrow forward__arrow" />
        </a>
      </div>
      <ol
        className="home__imgSlide"
        style={{ transform: `translateX(-${Xcoord}px)` }}
      >
        <li>
          <div className="home__imgSize">
            <div className="home__imgCenter">
              <a className="home__toAmazonShips" href="/">
                <img
                  className="home__Img"
                  src={background1}
                  alt="background1 - ship over 45 million products around the world"
                ></img>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="home__imgSize">
            <div className="home__imgCenter">
              <a className="home__toAmazonShips" href="/">
                <img
                  className="home__Img"
                  src={background2}
                  alt="background1 - ship over 45 million products around the world"
                ></img>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="home__imgSize">
            <div className="home__imgCenter">
              <a className="home__toAmazonShips" href="/">
                <img
                  className="home__Img"
                  src={background3}
                  alt="background1 - ship over 45 million products around the world"
                ></img>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="home__imgSize">
            <div className="home__imgCenter">
              <a className="home__toAmazonShips" href="/">
                <img
                  className="home__Img"
                  src={background4}
                  alt="background1 - ship over 45 million products around the world"
                ></img>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="home__imgSize">
            <div className="home__imgCenter">
              <a className="home__toAmazonShips" href="/">
                <img
                  className="home__Img"
                  src={background5}
                  alt="background1 - ship over 45 million products around the world"
                ></img>
              </a>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Home;
