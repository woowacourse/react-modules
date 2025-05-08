import styled from '@emotion/styled';

export const BackDrop = styled.div<{ backgroundColor: string | undefined; zIndex: number | undefined }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'rgba(0, 0, 0, 0.35)')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : '99')};
`;

export const ModalWrapper = styled.div<{ position: string; zIndex: number | undefined }>`
  position: fixed;
  left: 50%;
  top: ${(props) => props.position === 'center' && '50%'};
  bottom: ${(props) => props.position === 'bottom' && '0'};
  transform: ${(props) => (props.position === 'center' ? 'translate(-50%, -50%)' : 'translate(-50%, 0)')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : '100')};
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;
