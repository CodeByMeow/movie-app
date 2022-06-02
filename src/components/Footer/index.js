import { Wrapper, Content, Text } from "./Footer.styles";
import PropTypes from 'prop-types';

const Footer = ({ creator, year }) => {
  return (
    <Wrapper>
      <Content>
        <Text>
          &#169; {`${year} by ${creator}`}
        </Text>
      </Content>
    </Wrapper>
  )
}

Footer.protoTypes = {
  creator: PropTypes.string,
  year: PropTypes.number,
}

export default Footer;
