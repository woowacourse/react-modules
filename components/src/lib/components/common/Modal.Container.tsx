import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useModalContext } from './useModalContext';

type ModalContainerProps = {
  /**
   * The content of the modal
   */
  children: React.ReactNode;
  /**
   * position of the modal
   * @default 'center'
   */
  position?: 'center' | 'bottom';
  /**
   * Custom styles for the modal
   */
  containerStyle?: React.CSSProperties;
};

const ModalContainer = ({
  children,
  position = 'center',
  containerStyle = {},
}: ModalContainerProps) => {
  const { $zIndex = 1000, ...props } = useModalContext();

  return (
    <StyledModalContainer
      role="dialog"
      aria-modal="true"
      position={position}
      modalZIndex={$zIndex + 1}
      containerStyle={containerStyle}
      {...props}
    >
      {children}
    </StyledModalContainer>
  );
};

export default ModalContainer;

const positionStyle = {
  center: css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    animation: fadeIn 0.2s ease-out forwards;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  bottom: css`
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 16px 16px 0 0;
    animation: slideUp 0.2s ease-out forwards;

    @keyframes slideUp {
      0% {
        transform: translate(-50%, 100%);
      }
      100% {
        transform: translate(-50%, 0);
      }
    }
  `,
} as const;

const StyledModalContainer = styled.div<{ modalZIndex: number } & ModalContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  max-width: 400px;
  height: auto;
  position: fixed;
  background-color: white;
  padding: 18px 24px;
  ${({ position }) => positionStyle[position ?? 'center']};
  ${({ containerStyle }) => ({ ...containerStyle })};
  z-index: ${({ modalZIndex }) => modalZIndex};
`;
