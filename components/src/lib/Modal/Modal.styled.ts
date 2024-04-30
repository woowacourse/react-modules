import { ModalPosition } from '../../types/type';
import styled from 'styled-components';

export const DimmedLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
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
  box-sizing: border-box;
  margin: ${(props) => (props.modalPosition === 'center' ? '0 16px' : '')};
  max-width: ${(props) => (props.modalPosition === 'center' ? '640px' : '')};
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

export const ModalDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #999999;
`;
