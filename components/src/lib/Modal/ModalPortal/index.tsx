import clsx from 'clsx';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import '../../styles/reset.css';
import styles from './style.module.css';

export interface ModalPortalProps {
  children: ReactNode;
}
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
    <div className={clsx(styles.portal, 'modal-portal')}>{children}</div>,
    $modalRoot,
    'modal-portal',
  );
}
