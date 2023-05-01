import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a661ef86e324b3ea2edd4f22cf9fb615';

export async function getTrendingMovies() {
  const URL = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;
  const response = await axios.get(URL);
  // console.log(response.data.results)
  return response.data.results;
}

export async function getMovieDetails(movieId) {     
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  console.log(response.data);
  return response.data;
}

export async function getMovieSearch(query) {     
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  console.log(response.data);
  console.log(response.data.results);
  return response.data.results;
}