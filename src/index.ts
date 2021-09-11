import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import { moviesRoutes } from './routes/movies';

const app = express();

app.use(cors());

app.use(express.json());

moviesRoutes(app);

app.listen(3001, () => {
  console.log('Running :)');
});
