/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { CloseIcon } from "../common";
import { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const ModalContainer = styled.div<{
  position: "center" | "bottom";
  size: "small" | "medium" | "large";
}>`
  ${({ size }) => sizeStyles[size]}
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

const ModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-itmes: center;
  gap: 10px;
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
  closeButton?: boolean;
  confirmButton?: boolean;
  cancelButton?: boolean;
  onConfirm?: () => void;
  title?: string;
  onClose: () => void;
  isOpen: boolean;
  size: "small" | "medium" | "large";
  input?: boolean;
  inputValue?: string;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Modal({
  position = "center",
  closeButton,
  confirmButton,
  cancelButton,
  onConfirm,
  title,
  onClose,
  children,
  isOpen,
  size,
  input,
  inputValue,
  onInputChange,
}: PropsWithChildren<ModalInterface>) {
  if (!isOpen) return;

  return (
    <>
      <ModalContainer position={position} size={size}>
        <ModalTop>
          {title && <Title>{title}</Title>}
          {closeButton && <CloseIcon onClick={onClose} css={closeIconStyle} />}
        </ModalTop>
        {children}
        {input && (
          <Input height={"32px"} value={inputValue} onChange={onInputChange} />
        )}
        <ModalBottom>
          {cancelButton && (
            <Button type="cancel" size={size} onclick={onClose} />
          )}
          {confirmButton && (
            <Button
              type="confirm"
              size={size}
              onclick={onConfirm ? onConfirm : onClose}
            />
          )}
        </ModalBottom>
      </ModalContainer>
      <ModalBackdrop onClick={onClose} />
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
