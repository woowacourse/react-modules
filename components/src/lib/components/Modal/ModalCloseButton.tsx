import styled from 'styled-components';
import { ComponentProps } from 'react';
import { useModal } from './ModalProvider';

interface ModalCloseButtonProps {
  onCloseClick?: () => void;
}

function ModalCloseButton({
  onCloseClick,
}: ModalCloseButtonProps & ComponentProps<'button'>) {
  const { setOpen } = useModal();

  return (
    <Button
      onClick={() => {
        setOpen(false);
        onCloseClick?.();
      }}
      className="close-button"
    >
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
