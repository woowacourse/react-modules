export interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  isOpen: boolean;
}

export interface ModalDimmerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {}

type ModalTheme = "dark" | "light";
export interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * @defaultValue "dark"
   */
  theme?: ModalTheme;
}

type ModalPosition = "center" | "bottom";
type ModalSize = "small" | "medium" | "large";
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
