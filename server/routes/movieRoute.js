import express from 'express';
import multer from 'multer';
import path from 'path';
import Movie from '../models/movie.js'; // Assuming you have a Mongoose model for movies
import { createMovie, getMovies } from '../controllers/movieController.js';

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Routes
router.get('/', getMovies);

router.post(
    '/',
    upload.fields([{ name: 'poster', maxCount: 1 }, { name: 'video', maxCount: 1 }]),
    createMovie
);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const trimmedId = id.trim(); // Trim any whitespace or newline characters
        const movie = await Movie.findById(trimmedId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error fetching movie by ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



export default router;
