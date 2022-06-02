import styled from "styled-components";

export const Wrapper = styled.div`
  background: url(${({ image }) => image}) no-repeat center, var(--darkGray);  
  height: 500px;
  position: relative;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px;
`;

export const Text = styled.div`
  max-width: 800px;
  position: absolute;
  min-height: 100px;
  color: var(--white);
  bottom:30px;

  a {
    border:none;
    outline: none;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: var(--red);
    color: var(--darkGray);
    cursor: pointer;
    transition: all .3s ease;
    :hover {
      color: var(--white);
    }
  }


  h1 {
    font-size: var(--fontSuperBig);
  }

  p {
    font-size: var(--fontBig);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`
