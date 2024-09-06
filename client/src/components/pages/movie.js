import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

const Card = styled.div`
  background: ${({ isSelected }) =>
    isSelected
      ? 'linear-gradient(to bottom, rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.9))'
      : 'linear-gradient(to bottom, rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.9))'};
  color: white;
  border-radius: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: ${({ isSelected }) => (isSelected ? 'default' : 'pointer')};
  box-shadow: ${({ isSelected }) =>
    isSelected ? '0 8px 16px rgba(255, 0, 0, 0.5)' : '0 4px 8px rgba(0, 0, 0, 0.3)'};
  
  &:hover {
    transform: ${({ isSelected }) => (isSelected ? 'none' : 'scale(1.03)')};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    width: 70%;
    height: 60%;
    position: relative;
    z-index: 1000;
    padding: 40px;
  `}
  @media (max-width: 768px) {
    width: ${({ isSelected }) => (isSelected ? '50%' : '100%')} ;
    height: ${({ isSelected }) => (isSelected ? 'auto' : '200px')}; // Smaller images on tablets
  }
`;

const PosterImage = styled.img`
  width: ${({ isSelected }) => (isSelected ? '70%' : '100%')} ;
  height: ${({ isSelected }) => (isSelected ? '60%' : '300px')}; // Automatically adjust height on selection
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: ${({ isSelected }) => (isSelected ? '70%' : '100%')} ;
    height: ${({ isSelected }) => (isSelected ? 'auto' : '200px')}; // Smaller images on tablets
  }

  @media (max-width: 480px) {
    height: ${({ isSelected }) => (isSelected ? 'auto' : '150px')}; // Even smaller images on mobile
  }
`;

const CardBody = styled.div`
  padding: 20px;
`;
const CardTitle = styled.h5`
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1rem; // Reduce font size for tablets
  }

  @media (max-width: 480px) {
    font-size: 0.875rem; // Reduce font size for mobile
  }
`;

const CardText = styled.p`
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.75rem; // Reduce font size for smaller screens
  }

  @media (max-width: 480px) {
    font-size: 0.7rem; // Further reduction for mobile
  }
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background-color: white;
  color: black;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 8px 16px; // Reduce padding for smaller screens
  }

  @media (max-width: 480px) {
    padding: 6px 12px; // Further reduction for mobile
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  cursor: pointer;
`;

const Movie = ({ movie, isSelected, onSelect, onDismiss }) => {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Card onClick={!isSelected ? onSelect : null} isSelected={isSelected}>
      {isSelected && <CloseButton onClick={onDismiss}>✖</CloseButton>}
      {movie.posterUrl && (
        <PosterImage src={`${movie.posterUrl}`} alt={`${movie.title} poster`} isSelected={isSelected} />
      )}
      <CardBody>
        <CardTitle>{movie.title}</CardTitle>
        <CardText>{movie.description}</CardText>
        <StyledLink to={`/movie/${movie._id}`} onClick={handleScrollToTop}>
          Download
        </StyledLink>
      </CardBody>
    </Card>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    posterUrl: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Movie;
