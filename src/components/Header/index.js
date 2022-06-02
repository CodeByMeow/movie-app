import { Wrapper, Content, Logo, TMDBLogo } from "./Header.styles";
import TMDBImgLogo from "../../assets/images/tmdb_logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo >
            KAT
          </Logo>
        </Link>
        <TMDBLogo src={TMDBImgLogo} />
      </Content>
    </Wrapper>
  )
}

export default Header;
