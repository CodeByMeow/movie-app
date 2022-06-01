import axios from "axios";
import {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../configs'

const apiSetting = {
  fetchMoivesByType: async (type) => {
    return await axios.get(`${API_URL}/${type}?api_key=${API_KEY}`)
  }
}

export default apiSetting;
