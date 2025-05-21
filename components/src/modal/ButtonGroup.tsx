import styled from '@emotion/styled';
import { CSSProperties, PropsWithChildren, useMemo } from 'react';

// ============================== Types ==============================

interface ButtonGroupProps {
  direction?: ButtonGroupDirectionType;
  align?: ButtonGroupAlignType;
  gap?: number;
  style?: CSSProperties;
}
type ButtonGroupDirectionType = 'row' | 'column';
type ButtonGroupAlignType = 'start' | 'center' | 'end';

// ============================== Component ==============================

function ButtonGroup({
  direction = 'row',
  align = 'center',
  gap = 12,
  style,
  children,
}: PropsWithChildren<ButtonGroupProps>) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledButtonGroup
      direction={direction}
      align={align}
      gap={gap}
      style={memoizedStyle}
    >
      {children}
    </StyledButtonGroup>
  );
}

// ============================== Styled Components ==============================

const StyledButtonGroup = styled.div<{
  direction: ButtonGroupDirectionType;
  align: ButtonGroupAlignType;
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

export default ButtonGroup;
