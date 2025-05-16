import styled from '@emotion/styled';

const Common = {
  colors: {
    white: ' #ffffff',
    black: '#000000',
    grey: '#00000080',
  },
  zIndex: {
    modalBackground: 100,
    modalContainer: 200,
  },
};

export const ModalBackground = styled.div<{
  isOpen: boolean;
  position: 'center' | 'bottom';
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  background-color: ${Common.colors.grey};
  backdrop-filter: blur(10px);
  width: 100%;
  min-width: 376px;
  height: 100%;
  margin: 0 auto;
  z-index: ${Common.zIndex.modalBackground};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => isOpen && '1'};
  align-items: ${({ position }) => {
    switch (position) {
      case 'center':
        return 'center';
      case 'bottom':
        return 'flex-end';
    }
  }};
`;

export const ModalContainer = styled.div<{
  position: 'center' | 'bottom';
  size: 'small' | 'medium' | 'large';
}>`
  position: relative;
  background-color: ${Common.colors.white};
  color: ${Common.colors.black};
  height: 20%;
  min-height: 150px;
  padding: 30px 35px;
  z-index: ${Common.zIndex.modalContainer};
  display: flex;
  flex-direction: column;

  ${({ position }) =>
    position === 'center' &&
    `min-width: 250px;
    border-radius: 16px;`}
  ${({ position }) =>
    position === 'bottom' &&
    ` width: 100%;
      border-radius: 10px 10px 0 0;`}

      ${({ position, size }) =>
    position === 'center' && size === 'small' && `width: 25%`}
      ${({ position, size }) =>
    position === 'center' && size === 'medium' && ` width: 40%;`}
      ${({ position, size }) =>
    position === 'center' && size === 'large' && ` width: 55%;`}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 26px;
  margin: 0 auto;
`;

export const CloseButton = styled.button<{ showCloseButton: boolean }>`
  background-color: transparent;
  cursor: pointer;
  display: ${({ showCloseButton }) => (showCloseButton ? 'block;' : 'none;')};
`;

export const ModalContent = styled.div`
  width: 100%;
  flex: 1;
  text-align: start;
  padding: 20px 0;
`;

export const ModalAction = styled.div`
  width: 100%;
  text-align: end;
`;
