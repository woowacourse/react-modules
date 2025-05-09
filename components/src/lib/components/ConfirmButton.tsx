import { css } from '@emotion/css';
import { useModalContext } from '../ModalContext';

const ConfirmButton = () => {
  const { onClose } = useModalContext();
  return (
    <button className={ConfirmButtonStyle} onClick={onClose}>
      확인
    </button>
  );
};

export default ConfirmButton;

const ConfirmButtonStyle = css`
  all: unset;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #333333;
  color: white;
  border: 1px solid #333333;

  &:focus {
    outline: none;
  }
`;
