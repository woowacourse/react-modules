import styled from '@emotion/styled';
import { CSSProperties, PropsWithChildren, useMemo } from 'react';

// ==============================
// Types
// ==============================

interface ButtonWrapperProps {
  direction?: ButtonWrapperDirectionType;
  align?: ButtonWrapperAlignType;
  gap?: number;
  style?: CSSProperties;
}
type ButtonWrapperDirectionType = 'row' | 'column';
type ButtonWrapperAlignType = 'start' | 'center' | 'end';

// ==============================
// Component
// ==============================

function ButtonWrapper({
  direction = 'row',
  align = 'center',
  gap = 12,
  style,
  children,
}: PropsWithChildren<ButtonWrapperProps>) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledButtonWrapper
      direction={direction}
      align={align}
      gap={gap}
      style={memoizedStyle}
    >
      {children}
    </StyledButtonWrapper>
  );
}

// ==============================
// Styled Components
// ==============================

const StyledButtonWrapper = styled.div<{
  direction: ButtonWrapperDirectionType;
  align: ButtonWrapperAlignType;
  gap: number;
}>`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => `${gap}px`};

  justify-content: ${({ direction, align }) => {
    if (direction === 'row') {
      if (align === 'start') return 'flex-start';
      if (align === 'center') return 'center';
      return 'flex-end';
    }
    return 'center';
  }};

  align-items: ${({ direction, align }) => {
    if (direction === 'column') {
      if (align === 'start') return 'flex-start';
      if (align === 'center') return 'center';
      return 'flex-end';
    }
    return 'center';
  }};
`;

export default ButtonWrapper;
