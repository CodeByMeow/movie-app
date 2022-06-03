import { Wrapper, Content, Thumnail, Text, TextOutline, Overlay } from "./MovieCard.styles";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../configs";
import playIcon from "../../assets/images/play-button-svgrepo-com.svg";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import noImage from "../../assets/images/no-image.jpg";
import { convertToSlug } from "../../utils/convertToSlug";

const MovieCard = ({ movie }) => {
  const { poster_path, title, id } = movie;
  const image = poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}` : noImage;
  const slug = convertToSlug(title);
  return (
    <Link to={`/movie/${id}-${slug}`}>
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
