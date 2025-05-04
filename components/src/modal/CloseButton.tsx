import styled from '@emotion/styled';
import { CSSProperties } from 'react';

function CloseButton({
  style,
  onClose,
}: {
  style?: CSSProperties;
  onClose: () => void;
}) {
  return (
    <StyledCloseButton type="button" style={style} onClick={onClose}>
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
