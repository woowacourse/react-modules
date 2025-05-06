import React, { createContext, useContext } from "react";
import useKeyEscClose from "./useKeyEscClose";
import {
  backGroundStyle,
  ModalBodyStyle,
  ModalCloseStyle,
  ModalContainerStyle,
  ModalFooterStyle,
  ModalHeaderStyle,
  ModalTitleStyle,
  ModalWrapperStyle,
} from "./styles";

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

interface ModalContextType {
  onHide: () => void;
}

const ModalContext = createContext<ModalContextType>({
  onHide: () => {
    throw new Error("ModalContext must be used within a ModalProvider");
  },
});

const Modal = ({ show, onHide, background = true, position = "center", gap = 16, children }: ModalProps) => {
  useKeyEscClose(onHide);
  return (
    <ModalContext.Provider value={{ onHide }}>
      <div css={ModalWrapperStyle(show)}>
        <div css={backGroundStyle(background)} onClick={onHide}></div>
        <div css={ModalContainerStyle(position, gap)}>{children}</div>
      </div>
    </ModalContext.Provider>
  );
};

Modal.Header = ({ closeButton = false, children }: ModalHeaderProps) => {
  const { onHide } = useContext(ModalContext);

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
