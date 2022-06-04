import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../API";

const useMovieFetch = () => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { slug } = useParams();
  const [movieId] = slug.split("-");

  useEffect(
    () => {
      (async () => {
        try {
          setLoading(true);
          const movie = await API.fetchMovieById(movieId);
          setState(movie.data);
          setLoading(false);
        } catch (error) {
          setError(true);
        }
      })()
    }, [])

  return { error, loading, state }
}

export default useMovieFetch;
