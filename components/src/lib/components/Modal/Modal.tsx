import {
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalButton,
  ModalInput,
  ModalLabel,
} from './@common';

import type {
  ModalHeaderType,
  ModalCloseButtonType,
  ModalContentType,
  ModalFooterType,
  ModalButtonType,
  ModalInputType,
  ModalLabelType,
} from './@common';

import {
  MODAL_DEVICE_CLASS_NAME_MAP,
  MODAL_POSITION_CLASS_NAME_MAP,
  MODAL_SIZE_CLASS_NAME_MAP,
} from './Modal.constant';

import type { ModalDevice, ModalPosition, ModalSize } from './Modal.type';

import useModalControl from '@hooks/Modal/useModalControl';

import { extendClassNames } from '@utils/extendClassNames';

import styles from './Modal.module.css';

export interface ModalProps {
  isOpen: boolean;
  position: ModalPosition;
  size?: ModalSize;
  device?: ModalDevice;
  onToggle: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> & {
  ModalHeader: ModalHeaderType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
  ModalCloseButton: ModalCloseButtonType;
  ModalButton: ModalButtonType;
  ModalInput: ModalInputType;
  ModalLabel: ModalLabelType;
} = ({ children, isOpen, device = 'mobile', size = 'small', position = 'center', onToggle }) => {
  useModalControl(isOpen, onToggle);

  return (
    isOpen && (
      <div
        className={extendClassNames(
          styles.modal,
          styles[MODAL_POSITION_CLASS_NAME_MAP[position]],
          styles[MODAL_DEVICE_CLASS_NAME_MAP[device]],
        )}
      >
        <div className={styles.dimmed} onClick={onToggle} />
        <div
          className={extendClassNames(
            styles.modalContainer,
            styles[MODAL_POSITION_CLASS_NAME_MAP[position]],
            styles[MODAL_SIZE_CLASS_NAME_MAP[size]],
          )}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;

Modal.ModalHeader = ModalHeader;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;
Modal.ModalButton = ModalButton;
Modal.ModalInput = ModalInput;
Modal.ModalLabel = ModalLabel;
