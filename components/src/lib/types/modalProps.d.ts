export interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  isOpen: boolean;
}

export interface ModalDimmerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

type ModalButtonTheme = "dark" | "light";
type ModalButtonSize = "small" | "large";
export interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * 모달 버튼의 색 테마를 결정
   * @defaultValue "dark"
   */
  theme?: ModalButtonTheme;
  /**
   * 모달 버튼의 사이즈를 결정
   * @defaultValue "large"
   */
  size?: ModalButtonSize;
}

type ModalPosition = "center" | "bottom";
type ModalContentSize = "small" | "medium" | "large";
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 모달의 위치를 결정
   * @defaultValue "center"
   */
  position?: ModalPosition;
  /**
   * 모달의 사이즈를 결정
   * @defaultValue "medium"
   */
  size?: ModalSize;
}
