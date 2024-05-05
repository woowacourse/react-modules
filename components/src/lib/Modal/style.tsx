import styled from "styled-components";

export const Modal = styled.section<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: relative;

  height: 100vh;
  width: 376px;
`;
