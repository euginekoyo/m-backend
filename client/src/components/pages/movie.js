import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.7),
      rgba(20, 20, 20, 0.9)
    ),
    #141414;
  color: white;
  border: none;
  border-radius: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10px;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CardBody = styled.div`
  padding: 20px;
  background: linear-gradient(
      to top,
      rgba(20, 20, 20, 0.9),
      rgba(20, 20, 20, 0.7)
    ),
    transparent;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Video = styled.video`
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f40612;
  }
`;

const Movie = ({ movie }) => {
  return (
    <Card>
      {movie.posterUrl && (
        <PosterImage src={`${movie.posterUrl}`} alt={`${movie.title} poster`} />
      )}

      <CardBody>
        <CardTitle>{movie.title}</CardTitle>
        <CardText>{movie.description}</CardText>
        <CardText><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</CardText>

        <StyledLink to={`/movie/${movie._id}`}>Download</StyledLink>
      </CardBody>
    </Card>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    releaseDate: PropTypes.string,
    posterUrl: PropTypes.string,
    videoUrl: PropTypes.string,
  }).isRequired,
};

export default Movie;
