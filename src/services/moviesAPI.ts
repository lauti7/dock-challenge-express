import axios from 'axios';
import { Movie, MovieAPIResponse } from '../utils/interfaces';

const API_KEY = process.env.API_KEY;

console.log(API_KEY);

const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`;

export const getPopularMovies = async (
  page: string
): Promise<MovieAPIResponse> => {
  try {
    const response = await axios.get(`${POPULAR_URL}&page=${page}`);
    const movies: Movie[] = response.data.results;

    const result: MovieAPIResponse = {
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
): Promise<MovieAPIResponse> => {
  try {
    const url = `${SEARCH_URL}&query=${query}&page=${page}`;
    console.log(url);
    const response = await axios.get(url);
    const movies: Movie[] = response.data.results;

    const result: MovieAPIResponse = {
      movies,
      total_pages: response.data.total_pages,
      current_page: parseInt(page),
    };

    return result;
  } catch (error) {
    throw new Error('Unexpected error while searching movies');
  }
};
