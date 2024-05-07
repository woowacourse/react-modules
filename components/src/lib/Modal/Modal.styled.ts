import styled from 'styled-components';

export const DimmedLayer = styled.div<{ zIndex: number }>`
  position: fixed;
  inset: 0;
  z-index: ${(props) => 100 + props.zIndex};
  width: 100vw;
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div<{
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

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.2;
`;

export const ModalCloseButton = styled.img`
  width: 18px;
  height: 18px;
`;

export const ModalTitle = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
`;

export const ModalDescription = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
  color: #999999;
`;

export const ButtonContainer = styled.div<{ buttonPosition: ButtonPosition }>`
  display: flex;
  flex-direction: ${(props) =>
    props.buttonPosition === 'row' ? 'row-reverse' : 'column'};
  gap: 16px;
`;
