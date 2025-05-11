import styled from "styled-components";

type ModalButtonProps = {
  $size: "small" | "medium" | "large";
  $variant: "primary" | "secondary";
};

const VARIANT_STYLES = {
  primary: {
    backgroundColor: "#333333",
    color: "#ffffff",
    borderColor: "#333333",
  },
  secondary: {
    backgroundColor: "#ffffff",
    color: "#606060",
    borderColor: "#B9B9B9",
  },
};

export const ModalButton = styled.button<ModalButtonProps>`
  background-color: ${({ $variant }) =>
    VARIANT_STYLES[`${$variant}`].backgroundColor || "#ffffff"};
  color: ${({ $variant }) => VARIANT_STYLES[`${$variant}`].color || "#000000"};
  width: ${({ $size }) => getSize($size)};
  border: solid 2px
    ${({ $variant }) => VARIANT_STYLES[`${$variant}`].borderColor || "#000000"};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0 0 0;
  &:hover {
  }
`;

function getSize(size: "small" | "medium" | "large") {
  switch (size) {
    case "small":
      return "120px";
    case "medium":
      return "200px";
    case "large":
      return "100%";
    default:
      return "100%";
  }
}
