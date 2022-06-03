import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 10px;
  max-width: 300px;
  height: 440px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 15px;

  :hover > div {
    height: 100%;
  }

  :hover > div >img {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 0%;
  width: calc(100% - 20px);
  bottom: 10px;
  transition: height 0.5s ease-out;
  background: linear-gradient(to bottom, transparent 0%, black 100%);
  flex: 1;
  border-radius: inherit;

  img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-filter: invert(100%); /* Safari/Chrome */
    filter: invert(100%);   
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
`;

export const Thumnail = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: inherit;
  object-fix: cover;
  flex-shink: 0;
  margin-bottom: auto;
`;

export const TextOutline = styled.div`
  position: absolute;
  bottom: 30px;
  width: calc(100% - 20px);
  background-color: var(--mediumGray);
  left: 10px;
`;

export const Text = styled.h4`
  color: var(--white);
  font-size: var(--fontBig);
  text-align: center;
  padding: 5px;
`;
