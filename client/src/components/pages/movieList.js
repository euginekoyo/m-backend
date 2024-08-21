import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchMovies } from '../../api';
import Movie from './movie';
import { Link } from 'react-router-dom';
import Skeleton from './Layout/Skeleton';

const MovieListContainer = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 50, 1) 0%, rgba(0, 0, 0, 1) 100%);
  min-height: 100vh;
  color: white;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    margin: 0;
  }

  .admin-link {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies();
      setMovies(moviesFromServer);
    };

    getMovies();
  }, []);
  if (!movies.length) return <Skeleton />;
  return (
    <MovieListContainer>
      <Header>
        {/* <h1>Movies</h1> */}

      </Header>
      <MovieGrid>
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </MovieGrid>
    </MovieListContainer>
  );
};

export default MovieList;
