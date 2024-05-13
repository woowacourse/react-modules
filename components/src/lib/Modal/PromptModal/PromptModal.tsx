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

  /**
   * @defaultValue 'large'
   * @remarks type ModalSize = "small" | "medium" | "large"
   */
  size?: ModalSize;

  /**
   * @defaultValue 'center'
   * @remarks type ModalPosition = "center" | "bottom"
   */
  modalPosition?: ModalPosition;

  /**
   * @defaultValue 'right'
   * @remarks  type ButtonJustifyContent = "center" | "left" | "right"
   */
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
}: React.PropsWithChildren<PromptModalProps>) => {
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
      {content && <ModalTextBody>{content}</ModalTextBody>}
      <Input {...inputProps} />
      {children}
    </Modal>
  );
};

export default PromptModal;
