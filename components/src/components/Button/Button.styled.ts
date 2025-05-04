import styled from "@emotion/styled";
import { ButtonVariants } from ".";

export const getButtonStyle = (variant: ButtonVariants) => {
  switch (variant) {
    case "secondary":
      return `
        color: #fff;
        background: #333;  
      `;
    default: // "primary"
      return `
        color: rgba(51, 51, 51, 0.75);
        background: #FFF;
      `;
  }
};

export const Button = styled.button<{ variant: ButtonVariants }>`
  width: 5rem;
  height: 2.25rem;
  border-radius: 8px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.9375rem;
  font-weight: 700;
  ${({ variant }) => getButtonStyle(variant)}
`;
