import styled from "styled-components";

type ModalInputProps = {
  $placeHolder: string;
  size: "small" | "medium" | "large";
};

export const ModalInput = styled.input.attrs<ModalInputProps>(
  ({ $placeHolder }) => ({
    placeholder: $placeHolder,
  })
)`
  border: 1px solid #000000;
  padding: 8px;
  border-radius: 2px;
  width: ${({ size }) => getSize(size)};
  margin: 2px;
  box-sizing: border-box;
  height: 40px;
  margin: 10px 0;
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
