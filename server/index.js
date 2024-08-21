import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import helmet from 'helmet'
import authRoutes from './routes/authRoute.js';
import adminRoutes from './routes/adminRoute.js'; // Import the admin routes

dotenv.config();

const app = express();

// Get the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to the database
connectDB();

// Middleware
app.use(helmet());
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend origin
    credentials: true, // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // 1 day
            httpOnly: true, // Ensure cookies are not accessible via JavaScript
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        },
    })
);
// app.use((req, res, next) => {
//     console.log('Session:', req.session);
//     next();
// });
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
if (!process.env.SESSION_SECRET || !process.env.MONGO_URI) {
    console.error('Missing required environment variables');
    process.exit(1);
}

// Serve static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/movies', movieRoutes); // Ensure route prefix matches API_URL in axios

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
