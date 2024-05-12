import styled from 'styled-components';

import { ButtonContainerJustifyContent } from '@/lib/types/modal';

export interface ButtonContainerStyleProps {
  $buttonContainerJustifyContent: ButtonContainerJustifyContent;
}

const ButtonContainer = styled.div<ButtonContainerStyleProps>`
  display: flex;
  justify-content: ${(props) => props.$buttonContainerJustifyContent};
`;

export default ButtonContainer;
