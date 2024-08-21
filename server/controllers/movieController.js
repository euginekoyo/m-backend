import Movie from '../models/movie.js'; // Adjust the path as needed

// Get all movies
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        //console.table(movies)
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error.message);
        res.status(500).json({ error: 'Error fetching movies' });
    }
};

// Create a new movie
export const createMovie = async (req, res) => {
    try {
        const { title, description, releaseDate } = req.body;
        // Construct the URLs for poster and video
        const posterUrl = req.files.poster ? `http://localhost:5000/uploads/${req.files.poster[0].filename}` : null;
        const videoUrl = req.files.video ? `http://localhost:5000/uploads/${req.files.video[0].filename}` : null;

        // Create a new movie instance
        const newMovie = new Movie({
            title,
            description,
            releaseDate,
            posterUrl,
            videoUrl,
        });

        // Save the new movie to the database
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        console.error('Error creating movie:', error.message);
        res.status(500).json({ error: 'Error creating movie' });
    }
};
