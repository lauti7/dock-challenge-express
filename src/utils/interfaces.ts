export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  realease_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieAPIResponse {
  movies: Movie[];
  current_page: number;
  total_pages: number;
}
