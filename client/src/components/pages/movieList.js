import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchMovies } from '../../api';
import Movie from './movie';
import Skeleton from './Layout/Skeleton';

const MovieListContainer = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 50, 1) 0%, rgba(0, 0, 0, 1) 100%);
  min-height: 100vh;
  color: white;
  padding: 20px;
  position: relative;

  ${({ isBlurred }) =>
    isBlurred &&
    `
    filter: blur(5px);
    pointer-events: none;
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Adjust column size for mobile
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // Smaller columns for tablets and phones
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); // Even smaller for small mobile screens
  }
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies();
      setMovies(moviesFromServer);
    };

    getMovies();
  }, []);

  const handleMovieSelect = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseOverlay = () => {
    setSelectedMovieId(null);
  };

  const selectedMovie = movies.find((movie) => movie._id === selectedMovieId);

  if (!movies.length) return <Skeleton />;

  return (
    <>
      <MovieListContainer isBlurred={!!selectedMovieId}>
        <MovieGrid>
          {movies.map((movie) => (
            <Movie
              key={movie._id}
              movie={movie}
              onSelect={() => handleMovieSelect(movie._id)}
            />
          ))}
        </MovieGrid>
      </MovieListContainer>

      {selectedMovie && (
        <Overlay>
          <Movie
            movie={selectedMovie}
            isSelected={true}
            onDismiss={handleCloseOverlay} // Pass the dismiss function
          />
        </Overlay>
      )}
    </>
  );
};

export default MovieList;
