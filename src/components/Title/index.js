import { Wrapper, Content, Text } from "./Title.styles";
import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return (
    <Wrapper>
      <Content>
        <Text>
          {text}
        </Text>
      </Content>
    </Wrapper>
  );
}

Title.propTypes = {
  text: PropTypes.string,
}

export default Title;
