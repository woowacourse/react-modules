import styled from '@emotion/styled';
import { ReactElement } from 'react';

function PrimaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): ReactElement<HTMLButtonElement, 'button'> {
  return (
    <PrimaryButtonContainer onClick={onClick}>{label}</PrimaryButtonContainer>
  );
}

const PrimaryButtonContainer = styled.button`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: #333333;
  color: white;
  border-radius: 4px;
`;

export default PrimaryButton;
