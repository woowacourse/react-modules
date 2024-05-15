import { CSSProperties } from 'react';
import styles from './Modal.module.css';
import { ModalSizeProps } from '../interfaces';
import ModalHeader, { ModalHeaderProps } from '../ModalHeader/ModalHeader';
import ModalContent, { ModalContentProps } from '../ModalContent/ModalContent';
import ModalFooter, { ModalFooterProps } from '../ModalFooter/ModalFooter';

export interface ModalProps {
  modalHeader: ModalHeaderProps;
  modalContent?: ModalContentProps;
  modalFooter?: ModalFooterProps;
  modalPosition: 'center' | 'bottom';
  modalSize?: ModalSizeProps;
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  preventCloseOnOutsideClick?: boolean;
}

const Modal = ({
  modalHeader,
  modalContent,
  modalFooter,
  modalSize,
  backgroundColor,
  borderRadius,
  modalPosition,
  preventCloseOnOutsideClick,
}: ModalProps) => {
  const modalWidth = (): CSSProperties['width'] | undefined => {
    if (!modalSize) return;

    switch (modalSize.width) {
      case 'small':
        return '320px';
      case 'medium':
        return '480px';
      case 'large':
        return '600px';
      default:
        return modalSize.width;
    }
  };

  return (
    <>
      <div
        onClick={preventCloseOnOutsideClick ? () => {} : modalHeader.closeButton.onClose}
        className={styles['backdrop']}
      />
      <section
        style={{
          backgroundColor: `${backgroundColor || 'white'}`,
          borderRadius: `${borderRadius || '5px'}`,
          width: `${(modalSize && modalWidth()) || (modalPosition === 'center' ? '80%' : '100%')}`,
          height: `${(modalSize && modalSize.height) || 'fit-content'}`,
          minWidth: `${modalSize && modalSize.minWidth}`,
          minHeight: `${modalSize && modalSize.minHeight}`,
        }}
        className={styles[`container-${modalPosition}`]}
      >
        <ModalHeader {...modalHeader} />
        <ModalContent {...modalContent} />
        <ModalFooter {...modalFooter} />
      </section>
    </>
  );
};

export default Modal;
