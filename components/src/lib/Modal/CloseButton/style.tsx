import styled from "styled-components";

export const CloseButton = styled.button`
  border: 1px solid transparent;

  background-color: ${(props) => props.theme.color.white};

  cursor: pointer;
`;

export const CloseImg = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 10px;
`;
