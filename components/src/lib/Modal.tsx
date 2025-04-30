import React, { createContext, useContext } from "react";
import closeIcon from "./assets/close.svg";
import { css } from "@emotion/react";

interface ChildrenProps {
  children: React.ReactNode;
}

interface ModalProps extends ChildrenProps {
  show: boolean;
  onHide: () => void;
  background?: boolean;
  position?: "center" | "top" | "bottom";
  gap?: number;
}

interface ModalHeaderProps extends ChildrenProps {
  closeButton?: boolean;
}

interface ModalTitleProps extends ChildrenProps {
  color?: string;
}

const ModalContext = createContext<(() => void) | undefined>(undefined);

const Modal = ({ show, onHide, background = true, position = "center", gap = 16, children }: ModalProps) => {
  return (
    <ModalContext.Provider value={onHide}>
      <div css={ModalWrapperStyle(show)}>
        <div css={backGroundStyle(background)}></div>
        <div css={ModalContainerStyle(position, gap)}>{children}</div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = ({ closeButton = false, children }: ModalHeaderProps) => {
  const onHide = useContext(ModalContext);

  return (
    <div css={ModalHeaderStyle}>
      <span>{children}</span>
      {closeButton && <img src={closeIcon} alt="X" onClick={onHide} />}
    </div>
  );
};

Modal.Body = ({ children }: ChildrenProps) => {
  return <div css={ModalBodyStyle}>{children}</div>;
};

Modal.Footer = ({ children }: ChildrenProps) => {
  return <div css={ModalFooterStyle}>{children}</div>;
};

Modal.Title = ({ color = "#000", children }: ModalTitleProps) => {
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
const ModalContainerStyle = (position: string, gap: number) => {
  const positionStyle = getPositionStyle(position);

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    z-index: 99;
    box-sizing: border-box;
    padding: 24px 32px;
    gap: ${gap}px;
    ${positionStyle}
  `;
};

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

const ModalBodyStyle = css`
  width: 100%;
`;

const ModalFooterStyle = css`
  width: 100%;
`;

const getPositionStyle = (position: string) => {
  switch (position) {
    case "center":
      return css`
        width: calc(100% - 72px);
        border-radius: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;
    case "bottom":
      return css`
        width: 100%;
        border-radius: 8px 8px 0 0;
        position: fixed;
        bottom: 0;
        left: 0;
      `;
    case "top":
      return css`
        width: 100%;
        border-radius: 0 0 8px 8px;
        position: fixed;
        top: 0;
        left: 0;
      `;
    default:
      return css``;
  }
};
