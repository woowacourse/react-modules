import styled from "@emotion/styled";
import { ButtonVariants } from ".";
import Polymorphic from "../Polymorphic";

export const getButtonStyle = (variant: ButtonVariants) => {
  switch (variant) {
    case "secondary":
      return `
        color: rgba(51, 51, 51, 0.75);
        background: #FFF;
        border: 1px solid rgba(51, 51, 51, 0.25);
      `;
    default: // "primary"
      return `
        color: #fff;
        background: #333;  
      `;
  }
};

export const StyledPolymorphic = styled(Polymorphic)<{
  variant: ButtonVariants;
}>`
  width: 5rem;
  height: 2.25rem;
  border-radius: 4px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 0.9375rem;
  font-weight: 700;
  ${({ variant }) => getButtonStyle(variant)}
  cursor: pointer;
`;
