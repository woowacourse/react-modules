import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, useMemo } from 'react';

// ============================== Component ==============================

function Title({ style, children, ...props }: ComponentPropsWithoutRef<'h2'>) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <StyledTitle style={memoizedStyle} {...props}>
      {children}
    </StyledTitle>
  );
}

// ============================== Styled Components ==============================

const StyledTitle = styled.h2`
  margin: 0;
  justify-self: flex-start;
  font-size: 24px;
`;

export default Title;
