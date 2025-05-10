import Modal from './Modal';
import Button from './Button';
import { PromptModalProps } from '../types/PromptModal.type';
import Input from './Input';
import { useEffect, useState } from 'react';

const PromptModal = ({
  isOpen,
  onAfterOpen,
  onClose,
  onConfirm,
  position = 'center',
  title,
  content,
  confirmText = '확인',
  cancelText = '취소',
  placeholder,
}: PromptModalProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    onConfirm(inputValue);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setInputValue('');
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onClose={onClose} position={position}>
      <Modal.Header title={title} showCloseButton={false} />
      <Modal.Content>
        <div>{content}</div>
        <Input type="text" placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
      </Modal.Content>
      <Modal.Footer>
        <Button type="cancel" onClick={onClose} buttonText={cancelText} width="80px" />
        <Button type="confirm" onClick={handleConfirm} buttonText={confirmText} width="80px" />
      </Modal.Footer>
    </Modal>
  );
};
export default PromptModal;
