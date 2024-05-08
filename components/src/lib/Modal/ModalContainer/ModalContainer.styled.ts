import styled from 'styled-components';

export const StyledModalContainer = styled.div<{
  modalPosition: ModalPosition;
  size: ModalSize;
}>`
  position: ${(props) =>
    props.modalPosition === 'center' ? 'relative' : 'fixed'};
  inset: ${(props) =>
    props.modalPosition === 'center' ? '50%' : 'auto 0 0 0'};
  transform: ${(props) =>
    props.modalPosition === 'center' ? 'translate(-50%, -50%)' : 'none'};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => {
    if (props.modalPosition === 'bottom') {
      return '100%';
    }
    switch (props.size) {
      case 'medium':
        return '480px';
      case 'large':
        return '600px';
      default:
        return '320px';
    }
  }};
  max-height: 80vh;
  box-sizing: border-box;
  gap: 16px;
  padding: 24px;
  background-color: white;
  border-radius: ${(props) =>
    props.modalPosition === 'center' ? '12px' : '12px 12px 0 0'};
`;
