import React, { Dispatch, ReactNode, SetStateAction } from 'react';

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
// TODO 삭제
export interface ModalOptions {
  type: ModalType;
  animationDuration?: number; //단위:ms
  isNeedAnimation?: boolean;
  isCloseOnEsc?: boolean;
  isCloseOnBackdrop?: boolean;
  position?: ModalPosition;
  toastDuration?: number; //단위:ms
  contentsPadding?: string;
  borderRadius?: string;
  backgroundColor?: {
    modal?: string;
    backdrop?: string;
  };
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

export interface ModalContainerProps extends Omit<ModalCommonProps, 'setOpenModal'>, AnimationProps {
  closeModal: () => void;
}

export interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isCloseModal: boolean;
  handleCloseModal?: () => void;
}
