import axios from "axios";

const api_key = "8f47dcf64ad53b6eb75d5fec466e6ae0";
const baseURL = "https://api.themoviedb.org/3";

const getTreddingVideos = axios.get(baseURL 
    + "/trending/all/day?api_key=" + api_key);

export default {
    getTreddingVideos,
}