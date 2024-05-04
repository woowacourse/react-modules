export interface ModalMainProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  isOpen: boolean;
}

export interface ModalDimmerProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

type ModalTheme = "dark" | "light";
export interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * @defaultValue "dark"
   */
  theme?: ModalTheme;
}

type ModalPosition = "center" | "bottom";
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @defaultValue "center"
   */
  position?: ModalPosition;
}
