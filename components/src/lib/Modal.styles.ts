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
  width: 376px;
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
}>`
  position: relative;
  background-color: ${Common.colors.white};
  color: ${Common.colors.black};
  height: 216px;
  padding: 20px;
  z-index: ${Common.zIndex.modalContainer};

  ${({ position }) =>
    position === 'center' &&
    ` width: 304px;
      border-radius: 16px;`}
  ${({ position }) =>
    position === 'bottom' &&
    ` width: 100%;
      border-radius: 10px 10px 0 0;`}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 26px;
  margin: 0 auto;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
