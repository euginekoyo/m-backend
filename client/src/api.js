
import axios from 'axios';

// Define the base URL for the API
const API_URL = 'http://localhost:5000/api/movies'; // Ensure the correct base URL is used

// Create a new movie
export const createMovie = async (movieData) => {
    try {
        const response = await axios.post(API_URL, movieData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating movie:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};
export const fetchMovies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Axios automatically parses JSON
    } catch (error) {
        console.error('Error fetching movies:', error.message);
        return [];
    }
};
