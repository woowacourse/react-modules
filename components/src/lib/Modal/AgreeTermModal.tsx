import styled from "@emotion/styled";

const AgreeTermModal = ({ setIsOpen }: any) => {
  const onClose = () => {
    setIsOpen((prev: any) => !prev);
  };
  return (
    <AgreementContainer>
      <Header>
        <Title>약관에 동의해주세요</Title>
        <CloseButton onClick={onClose}>
          <img src="../../src/assets/images/Close.svg" />
        </CloseButton>
      </Header>

      <AgreementWrap>
        <AgreementItem>
          <img
            src="../../src/assets/images/check.png"
            alt=""
            width={20}
            height={20}
          />
          <Text>[필수] 개인정보 수집이용 동의</Text>
        </AgreementItem>
        <AgreementItem>
          <img
            src="../../src/assets/images/check.png"
            alt=""
            width={20}
            height={20}
          />
          <Text>[필수] 고객정보 제 3자 제공동의</Text>
        </AgreementItem>
      </AgreementWrap>
    </AgreementContainer>
  );
};

export default AgreeTermModal;

const AgreementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const AgreementWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CloseButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;

const AgreementItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #8b95a1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

const AgreementButton = styled.button`
  width: 100%;
  padding: 8px 0px;
  border: none;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  color: #fff;
  background: #333;
  cursor: pointer;
`;
