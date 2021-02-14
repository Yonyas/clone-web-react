import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";
const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[Math.floor(Math.random() * 20)]);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        background: `url(${base_url + movie.backdrop_path}) center center`,
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          {movie?.original_name || movie?.original_title || movie?.title}
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__info">{movie.overview}</div>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
