export interface Genre {
  id: number;
  name: string;
}
export interface GenresResponse {
  genres: Genre[];
}

interface Item {
  id: number;
  title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genres: Genre[];
  vote_average: number;
  first_air_date: string;
  release_date: string;
  spoken_languages: any[];
  runtime: number;
}
export interface AllResponse {
  results: Item[];
}
export interface DetailsResponse {
  id: number;
  title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genres: Genre[];
  vote_average: number;
  first_air_date: string;
  release_date: string;
  spoken_languages: any[];
  runtime: number
}

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}
export interface MovieResponse {
  results: Movie[];
}

interface Show {
  id: number;
  name: string;
  vote_average: number;
  first_air_date: string;
  poster_path: string;
}
export interface ShowResponse {
  results: Show[];
}

interface Cast {
  id: number;
  name: string;
  character: string;
  popularity: number;
  profile_path: string;
}

export interface CastResponse {
  cast: Cast[];
}

interface Author {
  name: string;
  rating: number;
  avatar_path: string;
}

export interface Review {
  id: string;
  author: string;
  author_details: Author;
  content: string;
}

export interface ReviewsResponse {
  results: Review[];
}
