import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

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
          Delever to Yonyas <span>Gangnam 099</span>
        </div>
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
