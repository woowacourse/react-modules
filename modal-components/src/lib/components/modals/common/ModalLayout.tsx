// ModalLayout.tsx
import ModalBox from "./ModalBox";
import {
  ModalContainer,
  ModalBackdrop,
  Container,
  Wrapper,
} from "./ModalStyle";
import { ConfirmModalProps } from "../../../types/modalTypes";
import { useEscapeKeyClose } from "../../../hook/useEscapeKeyClose";

interface ModalLayoutProps extends ConfirmModalProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalLayout = ({
  modalPosition = "center",
  modalSize = "medium",
  titleText = "",
  descriptionText = "",
  children,
  closeType,
  onClose,
  footer,
}: ModalLayoutProps) => {
  useEscapeKeyClose(onClose);

  return (
    <ModalContainer modalPosition={modalPosition}>
      <ModalBackdrop onClick={onClose} />
      <Container modalSize={modalSize}>
        <Wrapper>
          <ModalBox
            modalPosition={modalPosition}
            titleText={titleText}
            closeType={closeType}
            onClose={onClose}
          >
            {descriptionText && (
              <p
                style={{
                  whiteSpace: "pre-line",
                  overflow: "auto",
                  height: "200px",
                  fontSize: "12px",
                  color: "#424242",
                }}
              >
                {descriptionText}
              </p>
            )}
            {children}
            {footer}
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default ModalLayout;
