import { useHomeFetch } from "../../hooks/useHomeFetch";
import HeroImage from "../../components/HeroImage";
import Spinner from "../../components/Spinner";
import Carousel from "../../components/Carousel";
import Title from "../../components/Title";

const HomePage = () => {
  const { movies: { popular, top_rated, upcoming, now_playing }, error, loading } = useHomeFetch();
  const [now_playing_movie] = now_playing;
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <>
      {now_playing_movie ? (
        <HeroImage now_playing_movie={now_playing_movie} />
      ) : null}

      {loading && <Spinner />}

      <Title text="popular" />
      <Carousel movies={popular} />

      <Title text="upcoming" />
      <Carousel movies={upcoming} />

      <Title text="top rated" />
      <Carousel movies={top_rated} />
    </>
  );
}

export default HomePage;
