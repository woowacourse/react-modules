export interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  isOpen: boolean;
}

export interface ModalDimmerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  /**
   * 모달 닫기 버튼의 너비를 결정
   * @defaultValue 14
   * @example "14px"
   */
  length?: string;
}

type ModalButtonTheme = "dark" | "light";
type ModalButtonSize = "small" | "medium" | "large";
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
  /**
   * 모달 버튼의 width 100% 여부를 결정
   * @defaultValue false
   */
  fullWidth?: boolean;
  /**
   * 모달 버튼의 비활성화 여부를 결정
   * @defaultValue false
   */
  disabled?: boolean;
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
   * - position이 "bottom"일 경우 size 속성은 무시됨
   */
  size?: ModalSize;
}

export interface ModalInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
}
