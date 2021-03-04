import React from "react";
import "./home.css";
import background from "./images/sub/background1.jpg";
import sprite from "./images/sprite.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Home() {
  return (
    <div className="home">
      <div className="home__arrow">
        <ArrowBackIosIcon className="arrow back__arrow" />
        <ArrowForwardIosIcon className="arrow forward__arrow" />
      </div>
      <div className="home__imgSize">
        <div className="home__imgCenter">
          <a className="home__toAmazonShips" href="/">
            <img
              className="home__Img"
              src={background}
              alt="background1 - ship over 45 million products around the world"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
