import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/moviesAPI';
import { Loader } from 'components/Loader/Loader';
import Error from 'components/Error/Error';


const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  RESOLVE: 'resolve',
  ERROR: 'error',
};

const MovieDetails = () => {

   const [details, setDetails] = useState();
   const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  
  const { movieId } = useParams();
  console.log({ movieId });

  useEffect(() => {
    setStatus(Status.LOADING);
    getMovieDetails(movieId)
      .then(data => {
        setDetails(data);
        setStatus(Status.RESOLVE);
      })
      .catch(error => {
        setDetails({});
        setError(error);
        setStatus(Status.ERROR);
      });
  }, [movieId]);


  return (
    <div>
      {details && <MovieInfo details={details} />}
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <Error>{error}</Error>}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
