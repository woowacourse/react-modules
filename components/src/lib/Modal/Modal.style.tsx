import styled from 'styled-components';

export type ModalPosition = 'center' | 'bottom';

const ModalWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div<{ $position: ModalPosition }>`
  position: fixed;
  top: ${({ $position }) => $position === 'center' && '50%'};
  bottom: ${({ $position }) => $position === 'bottom' && '0px'};
  left: 50%;
  transform: ${({ $position }) =>
    $position === 'center' ? 'translate(-50%, -50%)' : 'translate(-50%, 0%)'};
  min-width: ${({ $position }) => ($position === 'bottom' ? '100%' : '80%')};
  min-height: 200px;
  background-color: white;
  border-radius: ${({ $position }) =>
    $position === 'center' ? '8px' : '8px 8px 0px 0px'};
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CloseIcon = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Content = styled.div`
  margin-bottom: 10px;
`;

const ConfirmButton = styled.button``;

const S = {
  ModalWrapper,
  Title,
  ModalBackground,
  ModalHeader,
  CloseIcon,
  ConfirmButton,
  Content,
  ModalContainer,
};

export default S;
