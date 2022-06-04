import { Wrapper, Content, Text, Thumbnail } from "./MovieInfo.styles";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../configs";
import noImage from "../../assets/images/no-image.jpg";

const MovieInfo = ({ movie }) => {
  const { backdrop_path, poster_path, title, overview, vote_average } = movie;
  const posterSrc = poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}` : noImage;
  return (
    <Wrapper backdrop_path={backdrop_path}>
      <Content>
        <Thumbnail src={posterSrc} />
        <Text>
          <h1>{title}</h1>
          <h3>PLOT</h3>
          <p>{overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{vote_average}</div>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  )
}

export default MovieInfo;
