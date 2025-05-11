import { css } from '@emotion/css';
import { useModalContext } from '../../ModalContext';

const ConfirmButton = ({ onClick }: { onClick?: () => void }) => {
  const { onClose } = useModalContext();
  const handleClick = () => {
    onClick?.();
    onClose();
  };

  return (
    <button className={ConfirmButtonStyle} onClick={handleClick}>
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

  &:hover {
    border: 1px solid #333333;
    background-color: #111111;
  }
`;
