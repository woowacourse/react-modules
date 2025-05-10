import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';

// ============================== Types ==============================

interface SecondaryButtonProps {
  label: string;
  onClick: () => void;
  style?: CSSProperties;
}

// ============================== Component ==============================

function SecondaryButton({ label, onClick, style }: SecondaryButtonProps) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <SecondaryButtonContainer style={memoizedStyle} onClick={onClick}>
      {label}
    </SecondaryButtonContainer>
  );
}

// ============================== Styled Components ==============================

const SecondaryButtonContainer = styled.button`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: #ffffff;
  color: #8b95a1;
  border-radius: 4px;

  cursor: pointer;
`;

export default SecondaryButton;
