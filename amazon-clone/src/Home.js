import React, { useState, useEffect, useLayoutEffect } from "react";
import Product from "./Product";
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

  // 화면사이즈 변경할 때, 이전 다음버튼 눌러서 카운터 바뀔 때
  useLayoutEffect(() => {
    if (counter > 4) {
      setCounter(0);
    } else if (counter < 0) {
      setCounter(4);
    }
    setXcoord(window.innerWidth * counter);

    window.addEventListener("resize", updateWidth);

    setArrowPosition(
      screenWidth > 1500 ? (window.innerWidth - 1500) / 2 + 30 : 30
    );

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenWidth, counter]);

  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <div className="home">
      {/* 이전 다음 버튼 */}
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
      {/* 이미지 슬라이드 */}
      <ol
        className="home__imgSlide"
        style={{
          transform: `translateX(-${Xcoord}px)`,
          width: `${screenWidth * 5}px`,
        }}
      >
        <BackImg
          link=""
          imgSrc={background1}
          imgAlt="background1 - ship over 45 million products around the world"
          screenWidth={screenWidth}
          show={counter === 0 ? "visible" : "hidden"}
        />
        <BackImg
          link=""
          imgSrc={background2}
          imgAlt="background2 - Discover our beauty selection"
          screenWidth={screenWidth}
          show={counter === 1 ? "visible" : "hidden"}
          left="900px"
        />
        <BackImg
          link=""
          imgSrc={background3}
          imgAlt="background3 - Shop computers and accessories"
          screenWidth={screenWidth}
          show={counter === 2 ? "visible" : "hidden"}
        />
        <BackImg
          link=""
          imgSrc={background4}
          imgAlt="background4 - Refresh your space"
          screenWidth={screenWidth}
          show={counter === 3 ? "visible" : "hidden"}
        />
        <BackImg
          link=""
          imgSrc={background5}
          imgAlt="background5 - Shop toys and games"
          screenWidth={screenWidth}
          show={counter === 4 ? "visible" : "hidden"}
        />
      </ol>
      {/* Product Component */}
      <ol className="product__ol">
        <Product
          className="product product__show"
          title="Hi, Yonyas"
          subtitle="Recommendations for you"
          profileImg="/images/product-profile.jfif"
          productInfo={[
            { imgSrc: "/images/product1-1.jfif", imgDesc: "Your Orders" },
            { imgSrc: "/images/product1-2.jfif", imgDesc: "Electronics" },
            {
              imgSrc: "/images/product1-3.jfif",
              imgDesc: "Computers & Accessories",
            },
            { imgSrc: "/images/product1-4.jfif", imgDesc: "Home & Kitchen" },
          ]}
        />
        <Product
          className="product product__show"
          title="Shop by Category"
          productInfo={[
            {
              imgSrc: "/images/product2-1.jpg",
              imgDesc: "Computers & Accessories",
            },
            { imgSrc: "/images/product2-2.jpg", imgDesc: "Video Games" },
            {
              imgSrc: "/images/product2-3.jpg",
              imgDesc: "Baby",
            },
            { imgSrc: "/images/product2-4.jpg", imgDesc: "Toys & Games" },
          ]}
          imageInfo=""
          linkMsg="Shop now"
        />
        <Product
          className="product product__show"
          title="Shop top categories"
          productInfo={["/images/product3.jpg"]}
          linkMsg="See more"
        />
        <Product
          className="product product__show"
          title="Deals & Promotions"
          productInfo={["/images/product4.jpg"]}
          linkMsg="Shop now"
        />
        <Product
          className="product product product__show"
          title="Get fit at home"
          productInfo={["/images/product5.jpg"]}
          linkMsg="Explore now"
        />
        <Product
          className="product product__show"
          title="AmazonBasics"
          productInfo={["/images/product6.jpg"]}
          linkMsg="See more"
        />
        <Product
          className="product product__hide"
          title="Computers & Accessories"
          productInfo={["/images/product7.jpg"]}
          linkMsg="Shop now"
        />
        <Product
          className="product product__hide"
          title="Electronics"
          productInfo={["/images/product8.jpg"]}
          linkMsg="See more"
        />
      </ol>
    </div>
  );
}

export default Home;
