import {
  MOVIE_POPULAR,
  MOVIE_UPCOMING,
  MOVIE_TOP_RATED,
  MOVIE_NOW_PLAYING,
} from '../configs';

import API from "../API";
import { useEffect, useState } from 'react';


export const useHomeFetch = () => {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [top_rated, setTopRated] = useState([]);
  const [now_playing, setNowPlaying] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPopularMovies = async () => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMoivesByType(MOVIE_POPULAR);
      setPopular(movies.data.results);
      setLoading(false);
    } catch (error) {
      setError(true)
    }
  }

  const fetchUpcomingMovies = async () => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMoivesByType(MOVIE_UPCOMING);
      setUpcoming(movies.data.results);
      setLoading(false);
    } catch (error) {
      setError(true)
    }
  }

  const fetchTopRatedMoives = async () => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMoivesByType(MOVIE_TOP_RATED);
      setTopRated(movies.data.results);
      setLoading(false);
    } catch (error) {
      setError(true)
    }
  }

  const fetchNowPlayingMovies = async () => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMoivesByType(MOVIE_NOW_PLAYING);
      setNowPlaying(movies.data.results);
      setLoading(false);
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTopRatedMoives();
    fetchNowPlayingMovies();
  }, [])

  return { movies: { popular, top_rated, upcoming, now_playing }, error, loading }
}
