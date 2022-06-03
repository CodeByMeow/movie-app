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
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </Content>
    </Wrapper>
  );
}
export default SearchPage;
