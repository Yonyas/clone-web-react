import "./App.css";
import React, { useState } from "react";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import movieTrailer from "movie-trailer";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [currentMovie, setCurrentMovie] = useState("");

  const playTrailer = (response) => {
    setTrailerUrl(response);
    setCurrentMovie("NETFLIX ORIGINALS");
  };

  //when click movie poster
  const handleClick = async (movie, category) => {
    // setTrailerUrl("");
    let response = await movieTrailer(
      movie?.original_name ||
        movie?.original_title ||
        movie?.title ||
        movie?.name ||
        "",
      { id: true }
    );

    playTrailer(response);

    // .then((id) => {
    //   setTrailerUrl(id);
    //   setCurrentMovie(category); //내가 클릭한 영화 카테고리 ex) NETFLIX ORIGINALS
    // })
    // .catch((error) => console.log(error));
  };

  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        trailerUrl={currentMovie === "NETFLIX ORIGINALS" ? trailerUrl : null}
        handleClick={handleClick}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        trailerUrl={currentMovie === "Trending Now" ? trailerUrl : null}
        handleClick={handleClick}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        trailerUrl={currentMovie === "Top Rated" ? trailerUrl : null}
        handleClick={handleClick}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        trailerUrl={currentMovie === "Action Movies" ? trailerUrl : null}
        handleClick={handleClick}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        trailerUrl={currentMovie === "Comedy Movies" ? trailerUrl : null}
        handleClick={handleClick}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        trailerUrl={currentMovie === "Horror Movies" ? trailerUrl : null}
        handleClick={handleClick}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        trailerUrl={currentMovie === "Romance Movie" ? trailerUrl : null}
        handleClick={handleClick}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        trailerUrl={currentMovie === "Documentaries" ? trailerUrl : null}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
