import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from './Layout/Skeleton';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px auto;
  max-width: 800px; /* Adjust as needed */
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const Poster = styled.img`
  max-width: 100%;
  border-radius: 5px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <Skeleton />;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <Card>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <Poster src={movie.posterUrl} alt={`${movie.title} poster`} />
      <ButtonContainer>
        <a href={movie.downloadUrl} download>
          <Button>Download</Button>
        </a>
        <a href={movie.videoUrl} target="_blank" rel="noopener noreferrer">
          <Button>View Trailer</Button>
        </a>
      </ButtonContainer>
    </Card>
  );
}

export default MovieDetails;
