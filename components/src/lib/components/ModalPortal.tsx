import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import '../styles/reset.css';
import styled from 'styled-components';

export interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export default function ModalPortal(props: ModalPortalProps) {
  const { children } = props;
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const stopModalPropagation = (e: globalThis.MouseEvent) => {
    e.stopPropagation();
  };

  const createModalRoot = () => {
    if (document.getElementById('modal-root')) return;

    const body = document.body;
    const $modalRoot = document.createElement('div');
    $modalRoot.id = 'modal-root';
    body.appendChild($modalRoot);
    setModalRoot($modalRoot);
  };

  useEffect(() => {
    createModalRoot();
    document.getElementsByTagName('body')[0].addEventListener('click', stopModalPropagation);
    return () => {
      document.getElementsByTagName('body')[0].removeEventListener('click', stopModalPropagation);
      if (modalRoot) document.body.removeChild(modalRoot);
    };
  }, [modalRoot]);

  return modalRoot ? (
    createPortal(
      <ModalPortalWrapper className="modal-portal">{children}</ModalPortalWrapper>,
      modalRoot,
      'modal-portal',
    )
  ) : (
    <div>모달이 열릴 장소를 찾을 수 없습니다.</div>
  );
}
