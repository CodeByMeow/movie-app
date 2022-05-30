import { Wrapper, Content, Logo, TMDBLogo } from "./Header.styles";
import TMDBImgLogo from "../../assets/images/tmdb_logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo >
          KAT
        </Logo>
        <TMDBLogo src={TMDBImgLogo} />
      </Content>
    </Wrapper>
  )
}

export default Header;
