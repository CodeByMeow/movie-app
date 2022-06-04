import useMovieFetch from "../../hooks/useMovieFetch";
import Spinner from "../../components/Spinner";
import MovieInfo from "../../components/MovieInfo";

const MoviewDetail = () => {
  const { error, loading, state } = useMovieFetch();
  return (
    <>
      {error ? <h4>Opps! Something went wrong.</h4> : null}
      {loading ? <Spinner /> : null}
      <MovieInfo movie={state} />
    </>
  )
}

export default MoviewDetail;
