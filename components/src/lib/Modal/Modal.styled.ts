export type ModalPosition = 'center' | 'bottom';
export type ButtonPosition = 'row' | 'column';

import styled from 'styled-components';

export const DimmedLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled.div<{ modalPosition: ModalPosition }>`
  position: ${(props) =>
    props.modalPosition === 'center' ? 'relative' : 'fixed'};
  inset: ${(props) =>
    props.modalPosition === 'center' ? '50%' : 'auto 0 0 0'};
  transform: ${(props) =>
    props.modalPosition === 'center' ? 'translate(-50%, -50%)' : 'none'};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => (props.modalPosition === 'center' ? '640px' : '')};
  max-height: 80vh;
  box-sizing: border-box;
  gap: 16px;
  z-index: 200;
  padding: 24px;
  background-color: white;
  border-radius: ${(props) =>
    props.modalPosition === 'center' ? '12px' : '12px 12px 0 0'};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalCloseButton = styled.img`
  width: 18px;
  height: 18px;
`;

export const ModalTitle = styled.h1`
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
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #999999;
`;

export const ButtonContainer = styled.div<{ buttonPosition: ButtonPosition }>`
  display: flex;
  flex-direction: ${(props) =>
    props.buttonPosition === 'row' ? 'row-reverse' : 'column'};
  gap: 16px;
`;
