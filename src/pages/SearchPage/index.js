import { Wrapper, Content } from "./SearchPage.styles";
import MovieCard from "../../components/MovieCard";
import Spinner from "../../components/Spinner";
import searchMovies from "../../hooks/useSearchMovie";

const SearchPage = () => {
  const { movies, loading } = searchMovies();
  return (
    <Wrapper>
      <Content>
        {loading ? <Spinner /> : null}
        {movies.length !== 0 ? movies.map(movie => <MovieCard movie={movie} key={movie.id} />) : <h4>Opps! Your movies not found.</h4>}
      </Content>
    </Wrapper>
  );
}
export default SearchPage;
