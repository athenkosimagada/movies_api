import axios from "axios";

const api_key = "8f47dcf64ad53b6eb75d5fec466e6ae0";
const baseURL = "https://api.themoviedb.org/3";

const getTreddingVideos = axios.get(baseURL 
    + "/trending/all/day?api_key=" + api_key);

const getPlayingNowVideos = axios.get(baseURL
    + "/movie/now_playing?language=en-US&page=1&api_key=" + api_key);
const getLatestVideos = axios.get(baseURL
    + "/discover/movie?include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=" + api_key);

export default {
    getTreddingVideos,
    getPlayingNowVideos,
    getLatestVideos
}