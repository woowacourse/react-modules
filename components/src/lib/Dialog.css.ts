import styled from '@emotion/styled/macro';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledContent = styled.div<{ position?: 'center' | 'bottom' }>`
  position: fixed;
  background-color: white;
  border-radius: 10px;

  ${(props) =>
    props.position === 'bottom'
      ? `
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `
      : `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const StyledCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;

  &:hover {
    color: #000;
  }
`;
