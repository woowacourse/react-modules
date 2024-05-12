import { CSSProperties, Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

export type ModalType = 'center' | 'bottom' | 'toast';

export interface ModalContentsProps {
  children: ReactNode;
}
export interface ModalPosition {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}
export interface Background {
  modal?: string;
  backdrop?: string;
}
export interface ModalCommonProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  isCloseOnEsc?: boolean;
  isCloseOnBackdrop?: boolean;
  contentsPadding?: string;
  borderRadius?: string;
  backgroundColor?: Background;
  children: ReactNode;
}

export interface AnimationProps {
  animationDuration?: number; //단위:ms
  isNeedAnimation?: boolean;
}
export interface BottomModalProps extends ModalCommonProps, AnimationProps {}
export interface ToastModalProps extends ModalCommonProps, AnimationProps {
  position?: ModalPosition;
  toastDuration?: number; //단위:ms
}
export type ButtonContainerJustifyContent =
  | 'center'
  | 'right'
  | 'left'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export interface AlertModalProps extends Omit<ModalCommonProps, 'children'> {
  title?: ReactNode;
  contents: ReactNode;
  buttonContainerJustifyContent?: ButtonContainerJustifyContent;
  buttonStyle: CSSProperties;
  buttonContents: ReactNode;
}

export type ExtraClickAction = (e?: MouseEvent<HTMLButtonElement>) => void;
export interface Button {
  contents: ReactNode;
  style?: CSSProperties;
  extraClickAction?: ExtraClickAction;
}

export interface ConfirmAndCancelButtonGroupProps {
  confirmButton: Button;
  cancelButton: Button;
  isConfirmButtonFirst?: boolean;
  closeModal: () => void;
}
export interface ConfirmModalProps
  extends Omit<ModalCommonProps, 'children'>,
    Omit<ConfirmAndCancelButtonGroupProps, 'closeModal'> {
  title?: ReactNode;
  contents: ReactNode;
  buttonContainerJustifyContent?: ButtonContainerJustifyContent;
}

export interface PromptModalProps extends Omit<ConfirmModalProps, 'contents'> {
  label: string;
  input: {
    attribute?: Omit<React.HtmlHTMLAttributes<HTMLInputElement>, 'id'>;
    props: Omit<React.ComponentProps<'input'>, 'id'>;
  };
}
export interface ModalContainerProps extends Omit<ModalCommonProps, 'setOpenModal'>, AnimationProps {
  closeModal: () => void;
}

export interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isCloseModal: boolean;
  handleCloseModal?: () => void;
}
