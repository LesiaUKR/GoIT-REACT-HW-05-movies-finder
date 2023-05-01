import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/moviesAPI';
import MoviesList  from 'components/MoviesList/MoviesList';
const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, [])

    
  return (
    <div>
      Home
      <MoviesList movies={movies} />
    </div>
  );
}

export default Homepage;