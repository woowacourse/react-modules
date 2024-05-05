import { ReactNode, useLayoutEffect, useState } from 'react';

import { BottomModalContext } from '../../contexts/';
import { useBottomModalContext, useModalContext } from '../../hooks/';
import { ModalContentsProps } from '../../types/modal';
import Modal from '../index';

import styles from './style.module.css';

const BASIC_ANIMATION_DURATION = 500;
const NOW = 0;

function BottomModal({ children }: ModalContentsProps) {
  const [className, setClassName] = useState(styles.bottomModalContents);
  const { closeModal, animationDuration, isNeedAnimation } = useModalContext();
  const timeout = isNeedAnimation ? animationDuration || BASIC_ANIMATION_DURATION : NOW;

  const fadeOutModal = () => {
    setClassName((prev) => prev.replace(styles.on, ''));

    setTimeout(() => {
      closeModal();
    }, timeout);
  };

  const fadeInModal = () =>
    setTimeout(() => {
      setClassName((prev) => prev + ' ' + styles.on);
    }, timeout);

  useLayoutEffect(() => {
    const timer = fadeInModal();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <BottomModalContext.Provider value={{ handleCloseModal: fadeOutModal }}>
        <Modal.Backdrop closeModal={fadeOutModal} />
        <Modal.Contents className={className} style={{ transitionDuration: `${timeout / 1000}s` }}>
          {children}
        </Modal.Contents>
      </BottomModalContext.Provider>
    </>
  );
}

/**
 * click 시 BottomModal에서 지정한 애니메이션 효과와 함께 BottomModal을 닫는 버튼
 */
function Button({ children }: { children: ReactNode }) {
  const { handleCloseModal } = useBottomModalContext();
  return (
    <Modal.button isCloseModal={true} handleCloseModal={handleCloseModal}>
      {children}
    </Modal.button>
  );
}

BottomModal.button = Button;

export default BottomModal;
