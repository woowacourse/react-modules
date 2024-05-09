import { ReactNode } from "react";
import styled from "styled-components";

const ModalContent = ({ children }: { children?: ReactNode }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const ContentWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  overflow: auto;
`;

export default ModalContent;
