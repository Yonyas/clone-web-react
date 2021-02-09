// https://api.themoviedb.org/3/movie/550?api_key=ee087fa90f139a6bbe8746b27040e75d

const APIKey = 'ee087fa90f139a6bbe8746b27040e75d';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${APIKey}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${APIKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${APIKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${APIKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${APIKey}&with_genres=99`,
};

export default requests;