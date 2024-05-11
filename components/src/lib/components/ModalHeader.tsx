import styled from "styled-components";
import xButton from "./asset/xButton.svg";

export interface Props {
  title: string;
  hasXButton?: boolean;
  setModalClose: (e: React.MouseEvent) => void;
  xButtonContent?: string;
}
const ModalHeader = ({
  title,
  hasXButton = true,
  setModalClose,
  xButtonContent,
}: Props) => {
  return (
    <HeaderContainer>
      {title}
      <Button onClick={(e) => setModalClose(e)}>
        {hasXButton && <img src={xButtonContent || xButton} />}
      </Button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export default ModalHeader;
