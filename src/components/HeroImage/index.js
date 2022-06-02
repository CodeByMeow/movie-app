import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, title, overview, movie_id }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <Link to={`/movie/${movie_id}`}>Watch now</Link>
          <h1>{title}</h1>
          <p>{overview}</p>
        </Text>
      </Content>
    </Wrapper>
  )
}

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  movie_id: PropTypes.number,
}

export default HeroImage;
