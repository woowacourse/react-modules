/** @jsxImportSource @emotion/react */

import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useDevice from '../../hooks/useDevice';
import { CloseIcon } from '../common';

import * as S from './Modal.styles';
import Button from '../common/Button/Button';

/**
 * 모달 컴포넌트의 props
 *
 * @property title - 모달의 제목입니다.
 * @property onClose - 모달을 닫을 때 호출되는 콜백 함수입니다.
 * @property isOpen - 모달이 열려 있는지 여부를 나타냅니다.
 * @property position - 모달의 위치를 지정합니다. 'center'(기본값) 또는 'bottom'을 사용할 수 있습니다.
 * @property margin - 모달의 좌우 마진(px)입니다. 기본값은 20입니다.
 * @property zIndex - 모달의 z-index 값입니다. 기본값은 10입니다.
 * @property size - 모달의 크기 (small | medium | large)
 */
export interface ModalInterface {
  /** 모달을 닫을 때 호출되는 콜백 함수 */
  onClose?: () => void;
  /** 모달이 열려 있는지 여부 */
  isOpen: boolean;
  /** 모달의 위치 (center | bottom) */
  position?: 'center' | 'bottom';
  /** 모달의 좌우 여백(px) */
  margin?: number;
  /** 모달의 z-index 값 */
  zIndex?: number;
  /** 모달의 크기 (small | medium | large) */
  size?: 'small' | 'medium' | 'large';
}

function ModalMain({
  onClose,
  children,
  isOpen,
  position = 'center',
  margin = 20,
  zIndex = 10,
  size = 'medium',
}: PropsWithChildren<ModalInterface>) {
  const device = useDevice();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <S.ModalContainer position={position} margin={margin} zIndex={zIndex} device={device} size={size}>
        {children}
      </S.ModalContainer>
      <S.ModalBackdrop onClick={onClose} />
    </>,
    document.body,
  );
}

/**
 * Top
 */

function Top({ children }: { children: ReactNode }) {
  return <S.ModalTop>{children}</S.ModalTop>;
}
Top.displayName = 'ModalTop';

function Title({ children }: { children: ReactNode }) {
  return <S.Title>{children}</S.Title>;
}
Title.displayName = 'ModalTitle';

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <S.CloseButton onClick={onClick}>
      <CloseIcon />
    </S.CloseButton>
  );
}
CloseButton.displayName = 'ModalCloseButton';

/**
 * Middle
 */
function Content({ children }: { children: ReactNode }) {
  return <S.ModalContent>{children}</S.ModalContent>;
}
Content.displayName = 'ModalContent';

/**
 * Bottom
 */

function Bottom({ children }: { children: ReactNode }) {
  return <S.ModalBottom>{children}</S.ModalBottom>;
}
Bottom.displayName = 'ModalBottom';

function CancelButton({ children }: { children: ReactNode }) {
  return <Button>{children}</Button>;
}
CancelButton.displayName = 'ModalCancelButton';

function ConfirmButton({ children }: { children: ReactNode }) {
  return <Button>{children}</Button>;
}
ConfirmButton.displayName = 'ModalConfirmButton';

const Modal = Object.assign(ModalMain, {
  Top,
  Title,
  CloseButton,
  Content,
  Bottom,
  CancelButton,
  ConfirmButton,
});

export default Modal;
