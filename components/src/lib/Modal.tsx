import React from "react";
import closeIcon from "./assets/close.svg";
import { css } from "@emotion/react";

const Modal = ({ background = true, children }: { background: boolean; children: React.ReactNode }) => {
  return (
    <div css={ModalWrapperStyle}>
      <div css={backGroundStyle(background)}></div>
      <div css={ModalContainerStyle}>{children}</div>
    </div>
  );
};

Modal.Header = ({ closeButton = false, children }: { closeButton: boolean; children: React.ReactNode }) => {
  return (
    <div>
      <span>{children}</span>
      {closeButton && <img src={closeIcon} alt="X" />}
    </div>
  );
};

Modal.Body = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Footer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Title = ({ children }: { children: React.ReactNode }) => {
  return <span>{children}</span>;
};

export default Modal;

const ModalWrapperStyle = css`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const backGroundStyle = (background: boolean) => css`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.35);
  visibility: ${background ? "visible" : "hidden"};
`;

const ModalContainerStyle = css`
  display: flex;
  padding: 24px 32px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
