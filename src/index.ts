import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { moviesRoutes } from './routes/movies';

const app = express();

app.use(express.json());

moviesRoutes(app);

app.listen(3001, () => {
  console.log('Running :)');
});
