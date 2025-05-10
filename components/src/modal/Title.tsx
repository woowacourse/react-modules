import styled from '@emotion/styled';
import { CSSProperties, PropsWithChildren, useMemo } from 'react';

// ============================== Types ==============================

interface TitleProps {
  style?: CSSProperties;
}

// ============================== Component ==============================

function Title({ style, children }: PropsWithChildren<TitleProps>) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return <StyledTitle style={memoizedStyle}>{children}</StyledTitle>;
}

// ============================== Styled Components ==============================

const StyledTitle = styled.h2`
  margin: 0;
  justify-self: flex-start;
  font-size: 24px;
`;

export default Title;
