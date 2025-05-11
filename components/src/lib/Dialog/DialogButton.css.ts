import styled from "@emotion/styled";
import { css } from "@emotion/react";

const buttonStyle = {
  primary: css`
    background-color: #333333;
    color: white;
    border: none;
  `,
  basic: css`
    background-color: white;
    color: #333333;
    border: 1px solid rgba(51, 51, 51, 0.25);
  `,
};

export const StyledButton = styled.button<{ $type: "primary" | "basic" }>`
  ${({ $type }) => buttonStyle[$type]};

  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 2px solid #333333;
    box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.3);
    transition: box-shadow 0.2s ease;
  }
`;
