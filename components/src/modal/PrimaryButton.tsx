import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';

// ============================== Types ==============================

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  style?: CSSProperties;
}

// ============================== Component ==============================

function PrimaryButton({ label, onClick, style }: PrimaryButtonProps) {
  const memoizedStyle = useMemo(() => {
    if (!style) return {};
    return { ...style };
  }, [style]);

  return (
    <PrimaryButtonContainer style={memoizedStyle} onClick={onClick}>
      {label}
    </PrimaryButtonContainer>
  );
}

// ============================== Styled Components ==============================

const PrimaryButtonContainer = styled.button`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: #333333;
  color: white;
  border-radius: 4px;

  cursor: pointer;
`;

export default PrimaryButton;
