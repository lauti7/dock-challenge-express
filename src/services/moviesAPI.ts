import axios from 'axios';

const API_KEY = process.env.API_KEY;

const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`;
const DETAILS_URL = `https://api.themoviedb.org/3/movie/##MOVIE_ID##?api_key=${API_KEY}&language=en-US`;

export const getPopularMovies = async (
  page: string
): Promise<IMovieAPIResponse> => {
  try {
    const response = await axios.get(`${POPULAR_URL}&page=${page}`);
    const movies: IMovie[] = response.data.results;

    const result: IMovieAPIResponse = {
      movies,
      total_pages: response.data.total_pages,
      current_page: parseInt(page),
    };

    return result;
  } catch (error) {
    throw new Error('Unexpected error while fetching popular movies');
  }
};

export const searchMovie = async (
  query: string,
  page: string
): Promise<IMovieAPIResponse> => {
  try {
    const url = `${SEARCH_URL}&query=${query}&page=${page}`;
    const response = await axios.get(url);
    const movies: IMovie[] = response.data.results;

    const result: IMovieAPIResponse = {
      movies,
      total_pages: response.data.total_pages,
      current_page: parseInt(page),
    };

    return result;
  } catch (error) {
    throw new Error('Unexpected error while searching movies');
  }
};

export const getMovieDetails = async (id: string) => {
  const url = DETAILS_URL.replace('##MOVIE_ID##', id);

  try {
    const response = await axios.get(url);
    const movie = response.data;

    const result: IMovieAPIResponse = {
      movies: [movie],
    };

    return result;
  } catch (error) {
    throw new Error('Unexpected error while fetching movie');
  }
};
