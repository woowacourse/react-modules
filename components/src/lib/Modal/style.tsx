import styled from "styled-components";

export const Modal = styled.section<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;
