import React, { createContext, useContext } from "react";
import closeIcon from "./assets/close.svg";
import { css } from "@emotion/react";

const ModalContext = createContext<(() => void) | undefined>(undefined);

const Modal = ({
  show,
  onHide,
  background = true,
  position = "center",
  children,
}: {
  show: boolean;
  onHide: () => void;
  background?: boolean;
  position?: string;
  children: React.ReactNode;
}) => {
  return (
    <ModalContext.Provider value={onHide}>
      <div css={ModalWrapperStyle(show)}>
        <div css={backGroundStyle(background)}></div>
        <div css={ModalContainerStyle(position)}>{children}</div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = ({ closeButton = false, children }: { closeButton: boolean; children?: React.ReactNode }) => {
  const onHide = useContext(ModalContext);

  return (
    <div css={ModalHeaderStyle}>
      <span>{children}</span>
      {closeButton && <img src={closeIcon} alt="X" onClick={onHide} />}
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

const ModalWrapperStyle = (show: boolean) => css`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  min-width: 300px;
  display: ${show ? "block" : "none"};
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

  img {
    cursor: pointer;
  }
`;

const ModalTitleStyle = (color: string) => css`
  color: ${color};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
