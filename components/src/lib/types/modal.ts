import React, { Dispatch, ReactNode, SetStateAction } from 'react';

export type ModalType = 'center' | 'bottom' | 'toast';

export interface ModalContentsProps {
  children: ReactNode;
}
}
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  type: ModalType;
  children: ReactNode;
  animationDuration?: number; //단위:s
  isNeedAnimation?: boolean;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  isCloseOnEsc?: boolean;
  isCloseOnBackdrop?: boolean;
}

export interface ModalComposedProps<T> extends React.HTMLAttributes<T> {
  children: ReactNode;
}

export interface ModalButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isCloseModal: boolean;
  handleCloseModal?: () => void;
}
