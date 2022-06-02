import { Wrapper, Content } from "./SearchBar.styles";

import searchIcon from "../../assets/images/search-icon.svg";

const SearchBar = () => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} />
        <input
          type="text"
          placeholder="Search Movie"
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar;
