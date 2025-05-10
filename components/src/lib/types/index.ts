import { HTMLAttributes } from "react";

export interface BaseProps extends HTMLAttributes<HTMLElement> {
  /** 필수 자식 요소 (JSX.Element 또는 문자열 등) */
  children: React.ReactNode;
}

export interface ModalProps extends BaseProps {
  /** 모달을 보여줄지 여부 */
  show: boolean;
  /** 모달을 닫는 함수 (배경 클릭이나 X 버튼 클릭 시 호출) */
  onHide: () => void;
}

export type ModalContainerProps = Omit<BaseProps, "children"> & {
  /** 모달 사이즈 설정 */
  size?: "small" | "medium" | "large" | "default";
  /** 모달 위치 설정 */
  position?: "center" | "top" | "bottom";
  /** 모달 내부의 flex 간격 설정 */
  gap?: number;
  /** 자식 요소 (옵셔널) */
  children?: React.ReactNode;
};

export interface ModalHeaderProps extends BaseProps {
  /** 닫기 버튼(X)을 표시할지 여부 */
  closeButton?: boolean;
}

export interface ModalButtonCSSProps {
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}
export interface ModalButtonProps extends ModalButtonCSSProps, BaseProps {
  onClick?: () => void;
}

export interface ModalAlertContainerProps extends ModalContainerProps {
  title?: string;
  description?: string;
}

export interface ModalConfirmContainerProps extends ModalContainerProps {
  title?: string;
  description?: string;
  onClick?: () => void;
}

export interface ModalPromptContainerProps extends ModalContainerProps {
  title?: string;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}
