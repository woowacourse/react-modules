<<<<<<< HEAD
import {MouseEvent, ReactNode, useEffect} from 'react';
=======
import { MouseEvent, ReactNode, useEffect } from "react";
>>>>>>> beaab83 ([1단계 - 페이먼츠 모듈] 머핀(서민지) 미션 제출합니다.  (#88))
import {
  Backdrop,
  CloseButton,
  ModalBox,
  Title,
  TopWrapper,
<<<<<<< HEAD
} from './Modal.styles';
import {IoClose} from 'react-icons/io5';
import {createPortal} from 'react-dom';
=======
} from "./Modal.styles";
import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";
>>>>>>> beaab83 ([1단계 - 페이먼츠 모듈] 머핀(서민지) 미션 제출합니다.  (#88))

interface TitleProps {
  text?: string;
  color?: string;
  size?: number;
}

export interface ModalProps {
<<<<<<< HEAD
  position?: 'center' | 'bottom';
=======
  position?: "center" | "bottom";
>>>>>>> beaab83 ([1단계 - 페이먼츠 모듈] 머핀(서민지) 미션 제출합니다.  (#88))
  title?: TitleProps;
  showCloseButton?: boolean;
  backgroundColor?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  position = 'center',
  title,
  showCloseButton = true,
  backgroundColor,
  children,
  isOpen,
  onClose,
}: ModalProps) => {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    isOpen &&
    createPortal(
      <Backdrop $position={position} onClick={onClose}>
        <ModalBox
          $backgroundColor={backgroundColor}
          $position={position}
          onClick={stopPropagation}
        >
          <TopWrapper $titleText={title?.text}>
            {title && (
              <Title $color={title.color} $size={title.size}>
                {title.text}
              </Title>
            )}
            {showCloseButton && (
              <CloseButton type="button" onClick={onClose}>
                <IoClose
                  color={backgroundColor === '#000' ? '#fff' : '#000'}
                  size={30}
                />
              </CloseButton>
            )}
          </TopWrapper>
          {children}
        </ModalBox>
      </Backdrop>,
      document.body
    )
  );
};

export default Modal;
