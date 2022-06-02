import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const Thumnail = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: inherit;
`;

export const TextOutline = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  background-image: linear - gradient(45deg, #f3ec78, #af4261);
  background-clip: text;
`;

export const Text = styled.h4`
  color: var(--white);
  font-size: var(--fontBig);
  text-align: center;
  padding: 5px;
`;
