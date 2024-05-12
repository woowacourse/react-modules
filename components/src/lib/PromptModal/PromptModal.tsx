import React, { useRef } from 'react';
import Modal, { ModalProps } from '../Modal/Modal';

import styles from './PromptModal.module.css';
import { convertPascalCase } from '../../utils/string';

interface PromptModalProps extends ModalProps, Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  onSubmit: (value: string) => void;
  title: string;
  confirmButtonLabel: string;
  cancelButtonLabel: string;
}

const PromptModal: React.FC<PromptModalProps> = ({
  onToggle,
  isOpen,
  position,
  size,
  title,
  value,
  onChange,
  onSubmit,
  confirmButtonLabel,
  cancelButtonLabel,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputClass = `modalInput${convertPascalCase(size)}`;

  const handleSubmit = () => {
    if (inputRef.current) {
      onSubmit(inputRef.current.value);
      onToggle();
    }
  };

  return (
    <Modal className={styles.promptModal} isOpen={isOpen} onToggle={onToggle} position={position} size={size} {...rest}>
      <Modal.ModalHeader title={title} />
      <Modal.ModalContent>
        <Modal.ModalInput className={styles[inputClass]} value={value} onChange={onChange} ref={inputRef} />
      </Modal.ModalContent>
      <Modal.ModalFooter className={styles.promptModalFooter}>
        <Modal.ModalButton variant="secondary" onClick={onToggle}>
          {cancelButtonLabel}
        </Modal.ModalButton>
        <Modal.ModalButton variant="primary" onClick={handleSubmit}>
          {confirmButtonLabel}
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
  );
};

export default PromptModal;
