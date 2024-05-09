import Modal, {
  ButtonJustifyContent,
  ModalPosition,
  ModalSize,
} from '../Modal';

import Input from '../../Input/Input';
import { LabelPosition } from '../../Input/Input';
import { ModalTextBody } from '../Modal.styled';

export interface PromptModalProps {
  isOpened: boolean;
  closeModal: () => void;
  handleConfirm?: () => void;

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  labelText?: string;
  labelPosition?: LabelPosition;
  placeholder?: string;

  title?: string;
  description?: string;
  content?: string;
  size?: ModalSize;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  buttonJustifyContent?: ButtonJustifyContent;
  primaryColor?: string;
}

const PromptModal = ({
  isOpened,
  closeModal,
  handleConfirm = () => {},

  value,
  onChange,

  labelText = '',
  labelPosition = 'row',
  placeholder = '',

  title = '',
  description = '',
  content = '',
  size = 'large',
  children,
  modalPosition = 'center',
  buttonJustifyContent = 'right',
  primaryColor = '#333333',
}: PromptModalProps) => {
  const handleClick = () => {
    handleConfirm();
    closeModal();
  };

  const inputProps = {
    value,
    onChange,
    labelText,
    labelPosition,
    placeholder,
    primaryColor,
  };

  return (
    <Modal
      isOpened={isOpened}
      closeModal={closeModal}
      title={title}
      description={description}
      size={size}
      modalPosition={modalPosition}
      buttonJustifyContent={buttonJustifyContent}
      primaryColor={primaryColor}
      primaryButton={{
        text: '확인',
        width: 'fit',
        onClick: handleClick,
      }}
      secondaryButton={{
        text: '취소',
        width: 'fit',
        onClick: closeModal,
      }}
    >
      <>
        <ModalTextBody>{content}</ModalTextBody>
        <Input {...inputProps} />
        {children}
      </>
    </Modal>
  );
};

export default PromptModal;
