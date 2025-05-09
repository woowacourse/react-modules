import styled from '@emotion/styled';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledContent = styled.div<{
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
}>`
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

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          width: 320px;
          max-width: 90%;
          padding: 16px;
        `;
      case 'large':
        return `
          width: 800px;
          max-width: 90%;
          padding: 24px;
        `;
      case 'medium':
      default:
        return `
          width: 500px;
          max-width: 90%;
          padding: 20px;
        `;
    }
  }}
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
