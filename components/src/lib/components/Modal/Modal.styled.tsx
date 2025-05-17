import styled from "@emotion/styled";

export const StyledModal = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
