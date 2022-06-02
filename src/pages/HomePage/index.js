import { useHomeFetch } from "../../hooks/useHomeFetch";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../configs";
import HeroImage from "../../components/HeroImage";
import Spinner from "../../components/Spinner";
import Carousel from "../../components/Carousel";
import Title from "../../components/Title";

const HomePage = () => {
  const { movies: { popular, top_rated, upcoming, now_playing }, error, loading } = useHomeFetch();

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <>
      {now_playing[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${now_playing[0].backdrop_path}`}
          title={now_playing[0].title}
          overview={now_playing[0].overview}
          movie_id={now_playing[0].id}
        />
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
