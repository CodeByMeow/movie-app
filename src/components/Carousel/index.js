import { useRef } from "react";
import { Wrapper, Content } from "./Carousel.styles";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { movies } = props;
  const ref = useRef({});
  const settings = {
    slidesToShow: 3,
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },

    ]
  };

  return (
    <Wrapper>
      <Content>
        <Slider ref={ref} {...settings} >
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </Slider>
      </Content>
    </Wrapper>
  );
}

Carousel.propTypes = {
  movies: PropTypes.array,
}

export default Carousel;
