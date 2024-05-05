import { useEffect, useLayoutEffect, useState } from 'react';

import { useModalContext } from '../../hooks/';
import { ModalContentsProps } from '../../types/modal';
import Modal from '../index';

import styles from './style.module.css';

const BASIC_ANIMATION_DURATION = 3000;

function TostModal({ children }: ModalContentsProps) {
  const { closeModal, animationDuration, position, isNeedAnimation } = useModalContext();
  const timeout = animationDuration || BASIC_ANIMATION_DURATION;

  const [className, setClassName] = useState(styles.tostModalContents + ' ' + styles.on);

  const fadInModal = () => {
    if (!isNeedAnimation) return;
    setTimeout(() => {
      setClassName((prev) => prev.replace(styles.on, ''));
    }, timeout);
  };
  const fadeOutModal = () =>
    setTimeout(() => {
      closeModal();
    }, timeout);

  useEffect(() => {
    if (!position) {
      throw new Error('position을 지정해주세요.');
    }
  }, []);

  useLayoutEffect(() => {
    fadInModal();
    const timer = fadeOutModal();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Modal.Contents className={className} style={{ ...position, transitionDuration: `${timeout / 1000}s` }}>
        {children}
      </Modal.Contents>
    </>
  );
}

export default TostModal;
