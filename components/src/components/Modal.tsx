import styled from "@emotion/styled";
import { CloseIcon } from "./common";

const ModalContainer = styled.div`
  width: 304px;
  background-color: #f5f5f5;
  padding: 24px 32px;

  border-radius: 8px;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export default function Modal({}) {
  return (
    <ModalContainer>
      <ModalTop>
        <Title>카드사 선택</Title>
        <CloseIcon />
      </ModalTop>
    </ModalContainer>
  );
}
