import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../../styles/reset.css';
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
  const $modalRoot = document.getElementById('modal-root') || document.body;

  const stopModalPropagation = (e: globalThis.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.getElementsByTagName('body')[0].addEventListener('click', stopModalPropagation);
    return () => {
      document.getElementsByTagName('body')[0].removeEventListener('click', stopModalPropagation);
    };
  }, []);

  return createPortal(
    <ModalPortalWrapper className="modal-portal">{children}</ModalPortalWrapper>,
    $modalRoot,
    'modal-portal',
  );
}
