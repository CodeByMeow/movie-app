import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--darkGray);
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--maxWidth);
`;

export const Logo = styled.h2`
  color: var(--white);
  padding: 8px;
  border: 2px solid var(--white);
`

export const TMDBLogo = styled.img`
  width: 100px;
`
