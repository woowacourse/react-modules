import styled from "styled-components";

export interface ModalTitleProps {
  text: string;
}

const ModalTitle = ({ text }: ModalTitleProps) => {
  return <StyledModalTitle>{text}</StyledModalTitle>;
};

export default ModalTitle;

const StyledModalTitle = styled.h1`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;
