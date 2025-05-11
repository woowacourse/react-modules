import { css } from '@emotion/css';
import { useModalContext } from '../../ModalContext';

const CancelButton = () => {
  const { onClose } = useModalContext();
  return (
    <button className={CancelButtonStyle} onClick={onClose}>
      취소
    </button>
  );
};

export default CancelButton;

const CancelButtonStyle = css`
  all: unset;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  color: #333333;
  border: 1px solid #c9c9c9;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid #c9c9c9;
    background-color: #c9c9c9;
  }
`;
