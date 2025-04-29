/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { CloseIcon } from "./common";
import { PropsWithChildren } from "react";
import { css } from "@emotion/react";

const ModalContainer = styled.div`
  width: 280px;

  background-color: white;
  padding: 24px 32px;

  border-radius: 8px;

  position: fixed;

  left: 0;
  right: 0;
  margin: 0 auto;

  top: 50%;
  transform: translateY(-50%);

  z-index: 2;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
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
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function Modal({
  position = "center",
  title,
  onClose,
  children,
  isOpen,
}: PropsWithChildren<ModalInterface>) {
  if (!isOpen) return;
  return (
    <>
      <ModalContainer>
        <ModalTop>
          <Title>{title}</Title>
          <CloseIcon onClick={onClose} css={closeIconStyle} />
        </ModalTop>

        {children}
      </ModalContainer>
      <ModalBackdrop onClick={onClose} />
    </>
  );
}

const closeIconStyle = css`
  cursor: pointer;
`;
