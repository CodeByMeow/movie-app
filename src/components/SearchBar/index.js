import { Wrapper, Content } from "./SearchBar.styles";

import searchIcon from "../../assets/images/search-icon.svg";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const createSearchQuery = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search/movie",
      search: `${createSearchParams({ q: query })}`
    })
  }

  const onChangeHandler = value => setQuery(value);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} />
        <form onSubmit={createSearchQuery}>
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </form>
      </Content>
    </Wrapper>
  )
}

export default SearchBar;
