import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { LoadingProps } from '.';

const sizeStyles = {
  xs: css`
    width: 0.7rem;
    height: 0.7rem;
  `,
  sm: css`
    width: 0.9rem;
    height: 0.9rem;
  `,
  md: css`
    width: 1rem;
    height: 1rem;
  `,
  lg: css`
    width: 1.25rem;
    height: 1.25rem;
  `,
  xl: css`
    width: 1.4rem;
    height: 1.4rem;
  `,
} as const;

export const StyledSpinner = styled.svg<LoadingProps>`
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ size }) => sizeStyles[size || 'md']};
`;
