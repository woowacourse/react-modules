import styled from "@emotion/styled";
import { CloseIcon } from "../common";
import { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import useFocus from "./useFocus";

const ModalContainer = styled.div<{
  position: "center" | "bottom";
  size: "small" | "medium" | "large";
}>`
  ${({ size }) => sizeStyles[size]}

  @media (max-width: 768px) {
    width: 80%;
  }

  height: fit-content;

  background-color: white;
  padding: 24px 32px;

  border-radius: ${(props) =>
    props.position === "center" ? "8px" : "8px 8px 0 0"};

  position: fixed;

  left: 0;
  right: 0;
  margin: 0 auto;

  top: ${(props) => (props.position === "center" ? "50%" : "auto")};
  transform: translateY(-50%);

  bottom: 0;

  z-index: 2;

  font-size: 12px;
  font-weight: 500;
  color: #0a0d13;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ModalTop = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-right: auto;
`;

const ModalBackdrop = styled.div`
  background-color: #000;
  opacity: 35%;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

interface ModalInterface {
  position?: "center" | "bottom";
  onClose: () => void;
  isOpen: boolean;
  size: "small" | "medium" | "large";
  title?: string;
  closeButton?: boolean;
  closeOnBackdropClick?: boolean;
}

export default function Modal({
  position = "center",
  onClose,
  children,
  isOpen,
  size = "medium",
  title,
  closeButton,
  closeOnBackdropClick = true,
}: PropsWithChildren<ModalInterface>) {
  if (!isOpen) return;

  const { modalRef }: { modalRef: React.RefObject<HTMLDivElement | null> } =
    useFocus(isOpen);

  return (
    <>
      <ModalContainer position={position} size={size} ref={modalRef}>
        <ModalTop>
          {title && <Title>{title}</Title>}
          {closeButton && (
            <CloseIcon onClick={onClose} css={closeIconStyle} tabIndex={0} />
          )}
        </ModalTop>
        {children}
      </ModalContainer>
      <ModalBackdrop onClick={closeOnBackdropClick ? onClose : () => {}} />
    </>
  );
}

const closeIconStyle = css`
  cursor: pointer;
`;

const sizeStyles = {
  small: css`
    width: 320px;
  `,
  medium: css`
    width: 480px;
  `,
  large: css`
    width: 600px;
  `,
};
