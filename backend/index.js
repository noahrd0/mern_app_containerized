import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import BooksRouter from './routes/Books.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/books', BooksRouter);

app.get('/status', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});
