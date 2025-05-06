import styled from "@emotion/styled";

const ButtonContainer = styled.div<{ type?: "confirm" | "cancel" }>`
  width: 80px;
  height: 36px;
  font-size: 15px;
  font-weight: 700;

  background-color: black;
  color: white;

  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }

  &:active {
    background-color: lightgray;
  }
`;

interface ButtonInterface {
  type?: "confirm" | "cancel";
  onclick: () => void;

  text?: string;
}

export default function Button({ type, onclick, text }: ButtonInterface) {
  const textMap: Record<"confirm" | "cancel", string> = {
    confirm: "확인",
    cancel: "취소",
  };

  const buttonText = type ? textMap[type] : text ?? "";

  return (
    <ButtonContainer type={type} onClick={onclick}>
      {buttonText}
    </ButtonContainer>
  );
}
