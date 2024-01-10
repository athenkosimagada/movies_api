import axiosClient from "./axiosClient";
import { AllResponse, CastResponse, DetailsResponse, GenresResponse, MovieResponse, ReviewsResponse, ShowResponse } from "./apiTypes";

export const category: {
  [key: string]: string;
} = {
  movie: "movie",
  tv: "tv",
};

export const movieType: {
  [key: string]: string;
} = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType: {
  [key: string]: string;
} = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getAllList: (params: any): Promise<AllResponse> => {
    const url = "trending/all/day?";
    return axiosClient.get(url, params);
  },
  getMoviesList: (type: string, params: any): Promise<MovieResponse> => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type: string, params: any): Promise<ShowResponse> => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate: string, id: any) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate: string, params: any) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  details: (cate: string, id: any, params: any): Promise<DetailsResponse> => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate: string, id: any): Promise<CastResponse> => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  reviews: (cate: string, id: any): Promise<ReviewsResponse> => {
    const url = category[cate] + "/" + id + "/reviews";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate: string, id: any): Promise<AllResponse> => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
  getGenres: async (cate: string): Promise<GenresResponse>  => {
    const url = 'genre/' + category[cate] + "/list";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
