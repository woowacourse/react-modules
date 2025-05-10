import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';
import { useModalContext } from './ModalProvider';

function CloseButton({ style }: { style?: CSSProperties }) {
  const { onClose } = useModalContext();

  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledCloseButton type="button" style={memoizedStyle} onClick={onClose}>
      <img
        src={new URL('./assets/close-button.png', import.meta.url).href}
        alt="모달 닫기 버튼"
      />
    </StyledCloseButton>
  );
}

const StyledCloseButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 24px;
  right: 32px;
  cursor: pointer;
`;

export default CloseButton;
