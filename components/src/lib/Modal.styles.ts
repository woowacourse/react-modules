import styled from '@emotion/styled';

const positionCenter = `top: 50%;
transform: translate(-50%, -50%);
left: 50%;`;

const positionBottom = `bottom: 0; left:0 right:0;`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  color: black;
  position: relative;
`;

export const ModalContainer = styled.div<{ position: string }>`
  width: 304px;
  height: 216px;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  z-index: 100;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 16px;

  ${({ position }) => (position === 'center' ? positionCenter : positionBottom)};
`;

export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

export const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const ModalContent = styled.main`
  flex: 1;
`;
