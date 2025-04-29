import styled from "@emotion/styled";
import { CloseIcon } from "./common";

const ModalContainer = styled.div`
  width: 280px;

  background-color: white;
  padding: 24px 32px;

  border-radius: 8px;

  position: fixed;

  left: 0;
  right: 0;
  margin: 0 auto;

  top: 50%;
  transform: translateY(-50%);
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
