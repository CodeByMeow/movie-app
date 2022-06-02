import { Wrapper, Content, Text } from "./Footer.styles";

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

export default Footer;
