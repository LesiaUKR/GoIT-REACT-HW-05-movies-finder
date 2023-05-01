import React, { useEffect, useState } from 'react'
import { getMovieSearch } from 'services/moviesAPI';
import Error from 'components/Error/Error';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error',
};

const MoviesSearch = () => {

  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  const {id} = useParams();
  console.log('params:', id);

  useEffect(() => {
    if (!searchText) {
      return;
    }
    setStatus(Status.LOADING);
    getMovieSearch(searchText)
      .then(movies => {
        // if (movies.results.length === 0) {
        //   setError(
        //     'Sorry, there are no images matching your search query. Please try again.'
        //   )
        //   return;
        // }

        setMovies(movies);
        setStatus(Status.RESOLVE);
      })
      .catch(error => {
        setMovies([]);
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [searchText, error]);

const onChangeQuery = searchText => {
  setSearchText(searchText);
  setMovies([]);
  setError(null);
  console.log(searchText);
};

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={onChangeQuery} />
      {status === 'loading' && <Loader />}
      {status === Status.RESOLVE && <MoviesList movies={movies} />}
      {status === Status.ERROR && <Error error={error} />}
    </>
  );
}

export default MoviesSearch;
