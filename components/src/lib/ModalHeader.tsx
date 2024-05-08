import styled from 'styled-components';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}
const ModalHeader = ({ children }: Props) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ModalHeader;
