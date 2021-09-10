import express, { Response, Request, Application } from 'express';
import { getPopularMovies, searchMovie } from '../services/moviesAPI';

export const moviesRoutes = (app: Application): void => {
  const router = express.Router();

  app.use('/api/movies', router);

  router.get('/popular', async (req: Request, res: Response) => {
    const page: string = (req.query.page as string) || '1';

    try {
      const response = await getPopularMovies(page);

      return res.status(200).json({ ...response, error: false });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ movies: [], error: true });
    }
  });

  router.get('/search', async (req: Request, res: Response) => {
    const page: string = (req.query.page as string) || '1';
    const query: string = (req.query.query as string) || '';

    if (query == '') {
      return res.status(400).json({
        movies: [],
        error: true,
        message: 'you should include a query param with a keyword',
      });
    }

    try {
      const response = await searchMovie(query, page);

      return res.status(200).json({ ...response, error: false, message: '' });
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json({ movies: [], error: true, message: error.message });
    }
  });
};
