/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../common';

const ModalContainer = styled.div<Pick<ModalInterface, 'position' | 'margin' | 'zIndex'>>`
  width: ${(props) => (props.position === 'center' ? 'calc(100% - 40px)' : '100%')};
  box-sizing: border-box;
  height: fit-content;

  background-color: white;
  padding: 24px 32px;

  border-radius: ${(props) => (props.position === 'center' ? '8px' : '8px 8px 0 0')};

  position: fixed;

  left: 0;
  right: 0;
  margin: 0 auto;

  top: ${(props) => (props.position === 'center' ? '50%' : 'auto')};
  transform: translateY(-50%);

  bottom: 0;

  z-index: ${(props) => props.zIndex};
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const ModalBackdrop = styled.div`
  background-color: #000;
  opacity: 35%;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

/**
 * 모달 컴포넌트의 props
 *
 * @property title - 모달의 제목입니다.
 * @property onClose - 모달을 닫을 때 호출되는 콜백 함수입니다.
 * @property isOpen - 모달이 열려 있는지 여부를 나타냅니다.
 * @property position - 모달의 위치를 지정합니다. 'center'(기본값) 또는 'bottom'을 사용할 수 있습니다.
 * @property margin - 모달의 좌우 마진(px)입니다. 기본값은 20입니다.
 * @property zIndex - 모달의 z-index 값입니다. 기본값은 10입니다.
 */
interface ModalInterface {
  /** 모달의 제목 */
  title: string;
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
}

export default function Modal({
  title,
  onClose,
  children,
  isOpen,
  position = 'center',
  margin = 20,
  zIndex = 10,
}: PropsWithChildren<ModalInterface>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose?.();

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <ModalContainer position={position} margin={margin} zIndex={zIndex}>
        <ModalTop>
          <Title>{title}</Title>
          <Button onClick={onClose}>
            <CloseIcon />
          </Button>
        </ModalTop>

        {children}
      </ModalContainer>
      <ModalBackdrop onClick={onClose} />
    </>,
    typeof window !== 'undefined' && window.document.body ? window.document.body : document.body,
  );
}
