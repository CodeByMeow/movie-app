import { Wrapper, Content } from "./SearchPage.styles";
import MovieCard from "../../components/MovieCard";
import searchMovies from "../../hooks/useSearchMovie";

const SearchPage = () => {
  const { movies } = searchMovies();
  return (
    <Wrapper>
      <Content>
        {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
      </Content>
    </Wrapper>
  );
}
export default SearchPage;
