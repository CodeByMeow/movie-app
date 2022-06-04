import API from "../API";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const q = searchParams.get('q')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await API.searchMovie(q);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })()
  }, [q]);

  return { movies, error, loading };
}

export default SearchMovie;
