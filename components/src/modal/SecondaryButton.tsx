import styled from '@emotion/styled';
import { ReactElement } from 'react';

function SecondaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}): ReactElement<HTMLButtonElement, 'button'> {
  return (
    <SecondaryButtonContainer onClick={onClick}>
      {label}
    </SecondaryButtonContainer>
  );
}

const SecondaryButtonContainer = styled.button`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 44px;
  background-color: #ffffff;
  color: #8b95a1;
  border-radius: 4px;
`;

export default SecondaryButton;
