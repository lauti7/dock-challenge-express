interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  genres: { id: number; name: string }[];
  belongs_to_collection?: { id: number; name: string; poster_path: string };
  budget?: number;
  production_companies?: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries?: { name: string }[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: { english_name: string }[];
  status?: string;
  tagline?: string;
  id: number;
  original_language: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IMovieAPIResponse {
  movies: Movie[];
  current_page?: number;
  total_pages?: number;
}
