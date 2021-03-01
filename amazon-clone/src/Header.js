import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
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
          Delever to Jiyon <span>Ganseogu 077</span>
        </div>
        <div className="header__search">
          <select className="header__searchSelect">
            <option value="All">All</option>
            <option value="arts-craft">Arts & Craft</option>
            <option value="automotive">automotive</option>
            <option value="baby">baby</option>
          </select>
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__language"></div>
        <div className="header__account"></div>
        <div className="header__order"></div>
        <div className="header__shopping-cart"></div>
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
            <a href="#">Jiyon's Amazon.com</a>
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
