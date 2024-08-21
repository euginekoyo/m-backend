import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    posterUrl: {
        type: String
    },
    videoUrl: {
        type: String
    }
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
