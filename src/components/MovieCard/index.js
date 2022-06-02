import { Wrapper, Content, Thumnail, Text, TextOutline } from "./MovieCard.styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../configs";
import { Link } from "react-router-dom";

const MovieCard = ({ movie_id, title, image }) => {
  return (
    <Link to={`/movie/${movie_id}`}>
      <Wrapper>
        <Content>
          <Thumnail src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} />
          <TextOutline>
            <Text>{title}</Text>
          </TextOutline>
        </Content>
      </Wrapper>
    </Link>
  )
}

export default MovieCard;
