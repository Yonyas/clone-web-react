import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import sprite from "./sprite.png";

function Header() {
  const [selectedOption, setSelectedOption] = useState("All");

  return (
    <nav className="header">
      <div className="header__top">
        <Link to="/">
          <img
            className="header__logo"
            alt="amazon-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          ></img>
        </Link>
        <div className="header__location">
          <img
            className="header__locationImg"
            src={sprite}
            alt="location"
          ></img>
          <div>
            Delever to Yonyas
            <span>
              <b>Gangnam 099</b>
            </span>
          </div>
        </div>
        {/* search box */}
        <div className="header__search">
          <Select
            className="header__searchSelect"
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
            autoWidth
            // style={{ width: `${stringWidth + 100}` }}
          >
            <option className="header__option" value="All">
              All
            </option>
            <option className="header__option" value="arts-craft">
              Arts & Craft
            </option>
            <option className="header__option" value="automotive">
              automotive
            </option>
            <option className="header__option" value="baby">
              baby
            </option>
            <option className="header__option" value="beauty-personal">
              Beauty & Personal Care
            </option>
            <option className="header__option" value="books">
              Books
            </option>
            <option className="header__option" value="computers">
              Computers
            </option>
          </Select>

          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        {/* 4 Links */}
        <div className="header__nav">
          {/* 1st link */}
          <div className="header__language"></div>
          {/* 2nd link */}
          <Link to="/" className="header__link">
            <div className="header__account header__linkblock">
              <span className="">Hello, Yonyas </span>
              <span className="">
                <b>Account & Lists</b>
              </span>
            </div>
          </Link>
          {/* 3rd link */}
          <Link to="/" className="header__link">
            <div className="header__order  header__linkblock">
              <span className="">Returns </span>
              <span className="">
                <b>& Orders</b>
              </span>
            </div>
          </Link>
          {/* 4th link */}
          <Link to="/checkout" className="header__link">
            <div className="header__shoppingCart header__linkblock">
              <img className="header__cartImg" src={sprite} alt="cart"></img>
              <span className="header__cartNum">0</span>
              <span>
                <b>Cart</b>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__bottom">
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Today's Deals</a>
          </li>
          <li>
            <a href="#">Customer Service</a>
          </li>
          <li>
            <a href="#">Yonyas's Amazon.com</a>
          </li>
          <li>
            <a href="#">Buy Again</a>
          </li>
          <li>
            <a href="#">Browsing History</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
          <li>
            <a href="#">Registry</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
