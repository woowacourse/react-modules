import styled from 'styled-components';
import { ReactNode } from 'react';

export interface ModalHeaderProps {
  children?: ReactNode;
}
const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
}: ModalHeaderProps) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ModalHeader;
