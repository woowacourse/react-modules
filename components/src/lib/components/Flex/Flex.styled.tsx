import styled from '@emotion/styled';

import { FlexStyleProps } from '.';

export const StyledFlex = styled('div')<FlexStyleProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => (typeof gap === 'number' ? `${gap}rem` : gap)};
  width: ${({ width }) => (typeof width === 'number' ? `${width}rem` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}rem` : height)};
  padding: ${({ padding }) => (typeof padding === 'number' ? `${padding}rem` : padding)};
  margin: ${({ margin }) => (typeof margin === 'number' ? `${margin}rem` : margin)};
  box-sizing: border-box;
`;
