import styled from 'styled-components';

interface ModalCloseButtonProps {
  onClose: () => void;
}

function ModalCloseButton({ onClose }: ModalCloseButtonProps) {
  return (
    <Button onClick={onClose} className="close-button">
      <span>X</span>
    </Button>
  );
}

export default ModalCloseButton;

const Button = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  padding: 0px;
  cursor: pointer;
`;
