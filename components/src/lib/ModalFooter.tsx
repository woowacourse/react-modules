import styled from "styled-components";
import { ButtonPosition, ModalButtonLayout } from "./modalType";
import { ReactNode } from "react";

interface FooterProps {
  buttonLayout?: ModalButtonLayout;
  buttonPosition?: ButtonPosition;
  children: ReactNode;
}

const ModalFooter = ({
  buttonLayout = "row",
  buttonPosition = "right",
  children,
}: FooterProps) => {
  return (
    <ButtonContainer
      $buttonLayout={buttonLayout}
      $buttonPosition={buttonPosition}
    >
      {children}
    </ButtonContainer>
  );
};

const getButtonPosition = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

const ButtonContainer = styled.div<{
  $buttonLayout: ModalButtonLayout;
  $buttonPosition: ButtonPosition;
}>`
  display: flex;
  flex-direction: ${(props) => props.$buttonLayout};
  justify-content: ${(props) => getButtonPosition[props.$buttonPosition]};
  gap: 12px;

  border-radius: 8px;
`;
export default ModalFooter;
