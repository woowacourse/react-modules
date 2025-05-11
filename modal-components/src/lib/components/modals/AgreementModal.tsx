import ModalLayout from "./common/ModalLayout";
import Button from "../common/Button";
import styled from "@emotion/styled";
import { ConfirmModalProps } from "../../types/modalTypes";
import Checkbox from "../common/CheckBox";
import { useState } from "react";

const ButtonContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
`;

const AgreementContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0;
`;

const AgreementContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const ContentText = styled.span<{ isRequired: boolean }>`
  cursor: ${({ isRequired }) => (isRequired ? "pointer" : "default")};
  &:hover {
    text-decoration: ${({ isRequired }) => (isRequired ? "underline" : "none")};
  }
`;

const detailsText = `## 개인정보취급방침 상세보기
본 서비스는 이용자의 개인정보를 중요시하며, 아래와 같이 개인정보를 안전하게 처리하고 보호하기 위해 최선을 다합니다.

### 1. 수집하는 개인정보 항목
- 이름, 이메일, 연락처 등 회원가입 또는 서비스 이용 시 필요한 최소한의 정보

### 2. 개인정보의 수집 및 이용 목적
- 서비스 제공 및 회원 관리
- 고객 문의 및 민원 처리
- 서비스 개선 및 신규 서비스 개발

### 3. 개인정보의 보유 및 이용 기간
- 회원 탈퇴 시 또는 법령에 따른 보관 기간 종료 시까지 보관 후 파기

### 4. 개인정보의 제3자 제공
- 원칙적으로 이용자의 동의 없이 제3자에게 제공하지 않으며, 법령에 정해진 경우에만 예외적으로 제공

### 5. 개인정보의 파기 절차 및 방법
- 목적 달성 후 즉시 파기
- 전자적 파일 형태는 복구 불가능한 방법으로 삭제

### 6. 이용자의 권리와 행사 방법
- 언제든지 본인의 개인정보 열람, 수정, 삭제, 처리 정지 요청 가능

### 7. 개인정보 보호책임자
- 개인정보 보호책임자: 홍길동
- 이메일: privacy@example.com

자세한 내용은 고객센터 또는 이메일로 문의해 주시기 바랍니다.
`;
const agreementContents = [
  {
    isRequired: true,
    text: "개인정보 수집 및 이용 동의",
    details: detailsText,
  },
  {
    isRequired: false,
    text: "개인정보 수집 및 이용 동의",
    details: "개인정보 수집 및 이용 동의 내용",
  },
];

const AgreementModal = ({
  modalPosition,
  modalSize,
  titleText,
  descriptionText,
  children,
  closeType,
  onClose,
  onConfirm = onClose,
}: ConfirmModalProps) => {
  const [checked, setChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [currentDetails, setCurrentDetailsClicked] = useState({
    isOpen: false,
    content: null,
  });

  const handleOpenDetail = (content) => {
    if (content.details) {
      setCurrentDetailsClicked({
        isOpen: true,
        content: (
          <ModalLayout
            modalPosition="center"
            modalSize={modalSize}
            titleText={content.text}
            descriptionText={content.details}
            closeType="top"
            onClose={() => {
              setCurrentDetailsClicked({ isOpen: false, content: null });
            }}
          />
        ),
      });
    }
  };

  const agreementContent = agreementContents.map((content, index) => (
    <AgreementContentBox key={index}>
      <Checkbox
        checked={content.isRequired ? checked : secondChecked}
        onChange={content.isRequired ? setChecked : setSecondChecked}
      />
      <span style={{ opacity: 0.6 }}>
        {content.isRequired ? "[필수]" : "[선택]"}
      </span>
      <ContentText
        isRequired={content.isRequired}
        onClick={() => handleOpenDetail(content)}
      >
        {content.text}
      </ContentText>
    </AgreementContentBox>
  ));

  const footer = (
    <ButtonContainer>
      <Button onClick={onConfirm} variant="primary" disabled={!checked}>
        확인
      </Button>
    </ButtonContainer>
  );

  return (
    <>
      <ModalLayout
        modalPosition={modalPosition}
        modalSize={modalSize}
        titleText={titleText}
        descriptionText={descriptionText}
        closeType={closeType}
        onClose={onClose}
        footer={footer}
      >
        <AgreementContentContainer>
          {agreementContent}
        </AgreementContentContainer>
        {children}
      </ModalLayout>
      {currentDetails.isOpen && currentDetails.content}
    </>
  );
};

export default AgreementModal;
