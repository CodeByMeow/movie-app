import {
  SEARCH_BASE_URL,
} from "../configs";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const q = searchParams.get('q')

  const searchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${SEARCH_BASE_URL}${q}`);
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    searchMovies();
  }, [q]);

  return { movies, error, loading };
}

export default SearchMovie;
