import Homepage from 'pages/Homepage';
import MovieDetails from 'pages/MovieDetails';
import MovieSearch from 'pages/MoviesSearch';
import Cast from './Cast/Cast';
import Review from './Review/Review';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

// import { MoviesList } from './moviesList/moviesList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
