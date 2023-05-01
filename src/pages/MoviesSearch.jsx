import React, { useEffect, useState } from 'react'
import { getMovieSearch } from 'services/moviesAPI';
import Error from 'components/Error/Error';
import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error',
};

const MoviesSearch = () => {
  
 const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus(Status.LOADING);
    getMovieSearch(query)
      .then(movies => {
        setMovies(movies);
        setStatus(Status.RESOLVE);
      })
      .catch(error => {
        setMovies([]);
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [query]);

  // const onChangeQuery = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  //   console.log(nextParams);
  //   setMovies([]);
  //   setError(null);
  //   console.log(query);
  //    if (!query) {
  //      return toast.error(
  //        'Sorry, there are no films matching your search query. Please try again.'
  //      );
  //    }
  // };
  const handleSubmit = e => {
    const nextParams = query !== '' ? { query } : {};
      setSearchParams(nextParams);
      console.log(nextParams);
      console.log(query);
    if (!query) {
      return toast.error(
        'Sorry, there are no films matching your search query. Please try again.'
      );
    }
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={handleSubmit} />
      {status === 'loading' && <Loader />}
      {status === Status.RESOLVE && <MoviesList movies={movies} />}
      {status === Status.ERROR && <Error error={error} />}
    </>
  );
}

export default MoviesSearch;
