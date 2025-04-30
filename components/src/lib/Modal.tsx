import React, { createContext, useContext } from "react";
import { css } from "@emotion/react";
import useKeyEscClose from "./useKeyEscClose";

export interface ChildrenProps {
  /** 자식 요소 (JSX.Element 또는 문자열 등) */
  children: React.ReactNode;
}

export interface ModalProps extends ChildrenProps {
  /** 모달을 보여줄지 여부 */
  show: boolean;

  /** 모달을 닫는 함수 (배경 클릭이나 X 버튼 클릭 시 호출) */
  onHide: () => void;

  /** 배경 어두움 여부  */
  background?: boolean;

  /** 모달 위치 설정: 가운데(center), 상단(top), 하단(bottom) */
  position?: "center" | "top" | "bottom";

  /** 모달 내부의 flex 간격 설정 */
  gap?: number;
}

export interface ModalHeaderProps extends ChildrenProps {
  /** 닫기 버튼(X)을 표시할지 여부 */
  closeButton?: boolean;
}

export interface ModalTitleProps extends ChildrenProps {
  /** 텍스트 색상 설정 */
  color?: string;
}

const ModalContext = createContext<(() => void) | undefined>(undefined);

const Modal = ({ show, onHide, background = true, position = "center", gap = 16, children }: ModalProps) => {
  useKeyEscClose(onHide);
  return (
    <ModalContext.Provider value={onHide}>
      <div css={ModalWrapperStyle(show)}>
        <div css={backGroundStyle(background)} onClick={onHide}></div>
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
      {closeButton && (
        <div css={ModalCloseStyle} onClick={onHide}>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.4922 1.41L13.0822 0L7.49219 5.59L1.90219 0L0.492188 1.41L6.08219 7L0.492188 12.59L1.90219 14L7.49219 8.41L13.0822 14L14.4922 12.59L8.90219 7L14.4922 1.41Z"
              fill="black"
            />
          </svg>
        </div>
      )}
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

const ModalCloseStyle = css`
  cursor: pointer;
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
