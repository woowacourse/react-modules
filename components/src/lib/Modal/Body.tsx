import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = ({ children }: { children: ReactNode }) => {
  return <MainSection id="modal-description">{children}</MainSection>;
};

export default Body;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
