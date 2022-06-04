import axios from "axios";
import {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
} from '../configs'

const apiSetting = {
  fetchMoivesByType: async (type) => {
    return await axios.get(`${API_URL}/${type}?api_key=${API_KEY}`)
  },
  searchMovie: async (q) => {
    return axios.get(`${SEARCH_BASE_URL}${q}`);
  },
  fetchMovieById: async (movieId) => {
    return await axios.get(`${API_URL}/${movieId}?api_key=${API_KEY}`)
  }
}

export default apiSetting;
