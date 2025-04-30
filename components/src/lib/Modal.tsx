import React from "react";
import closeIcon from "./assets/close.svg";
import { css } from "@emotion/react";

const Modal = ({
  background = true,
  position = "center",
  children,
}: {
  background?: boolean;
  position?: string;
  children: React.ReactNode;
}) => {
  return (
    <div css={ModalWrapperStyle}>
      <div css={backGroundStyle(background)}></div>
      <div css={ModalContainerStyle(position)}>{children}</div>
    </div>
  );
};

Modal.Header = ({ closeButton = false, children }: { closeButton: boolean; children?: React.ReactNode }) => {
  return (
    <div css={ModalHeaderStyle}>
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

Modal.Title = ({ color = "#000", children }: { color?: string; children: React.ReactNode }) => {
  return <span css={ModalTitleStyle(color)}>{children}</span>;
};

export default Modal;

const ModalWrapperStyle = css`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  min-width: 300px;
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

const ModalContainerStyle = (position: string) => css`
  display: flex;
  width: ${position === "center" ? "calc(100% - 72px)" : "100%"};
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
  box-sizing: border-box;
`;

const ModalHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ModalTitleStyle = (color: string) => css`
  color: ${color};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
