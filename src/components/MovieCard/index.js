import { Wrapper, Content, Thumnail, Text, TextOutline, Overlay } from "./MovieCard.styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../configs";
import playIcon from "../../assets/images/play-button-svgrepo-com.svg";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import noImage from "../../assets/images/no-image.jpg";

const MovieCard = ({ movie }) => {
  const { id, poster_path, title } = movie;
  const image = poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}` : noImage;
  return (
    <Link to={`/movie/${id}`}>
      <Wrapper>
        <Content>
          <Thumnail src={image} />
          <Overlay>
            <img src={playIcon} />
            <TextOutline>
              <Text>{title}</Text>
            </TextOutline>
          </Overlay>
        </Content>
      </Wrapper>
    </Link>
  )
}

MovieCard.protoTypes = {
  movie_id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default MovieCard;
