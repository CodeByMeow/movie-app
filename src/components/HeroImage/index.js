import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../configs";
import { Wrapper, Content, Text } from './HeroImage.styles';
import { convertToSlug } from "../../utils/convertToSlug";

const HeroImage = ({ now_playing_movie }) => {
  const { backdrop_path, title, overview } = now_playing_movie;
  const image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`
  const slug = convertToSlug(title);

  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <Link to={`/movie/${slug}`}>Watch now</Link>
          <h1>{title}</h1>
          <p>{overview}</p>
        </Text>
      </Content>
    </Wrapper>
  )
}

HeroImage.propTypes = {
  now_playing_movie: PropTypes.object,
}

export default HeroImage;
