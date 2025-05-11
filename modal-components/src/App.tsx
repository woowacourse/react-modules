import BasicModal from "./lib/components/modals/BasicModal";
import "./App.css";
import {
  useCardNumbersInput,
  useCardCVCInput,
} from "../../payments-hooks/src/lib";
import { useState } from "react";
import ConfirmModal from "./lib/components/modals/ConfirmModal";
import AlertModal from "./lib/components/modals/AlertModal";
import PromptModal from "./lib/components/modals/PromptModal";
import AgreementModal from "./lib/components/modals/AgreementModal";

function CardNumberInput() {
  const { cardNumbersInfo, cardBrand, cardBlocks, onChangeHandler } =
    useCardNumbersInput();
  const displayErrorMesssage = cardNumbersInfo.find(
    (info) => info.errorMessage !== ""
  )?.errorMessage;
  return (
    <div>
      <label>카드번호 입력</label>
      <div style={{ display: "flex", width: "100%" }}>
        {cardNumbersInfo.map((info, index) => (
          <input
            style={{ width: "100%", marginRight: "5px" }}
            key={index}
            type="text"
            value={info.value}
            onChange={onChangeHandler(index)}
            maxLength={cardBlocks[index]}
          />
        ))}
      </div>
      {displayErrorMesssage && <p>{displayErrorMesssage}</p>}
      <p>카드 브랜드: {cardBrand}</p>
    </div>
  );
}

function CardCVCInput() {
  const { cardCVC, onChangeHandler, errorMessage } = useCardCVCInput();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>카드 CVC 입력</label>
      <input
        type="text"
        value={cardCVC}
        onChange={onChangeHandler}
        maxLength={3}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

function App({
  modalPosition,
  closeType,
  titleText,
}: {
  modalPosition: "center" | "bottom";
  closeType: "top" | "bottom";
  titleText: string;
  children?: React.ReactNode;
}) {
  const [isBasicModalOpened, setIsBasicModalOpened] = useState(false);
  const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);
  const [isAlertModalOpened, setIsAlertModalOpened] = useState(false);
  const [isPromptModalOpened, setIsPromptModalOpened] = useState(false);
  const [isAgreementModalOpened, setIsAgreementModalOpened] = useState(false);

  const openBasicModal = () => {
    setIsBasicModalOpened(true);
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpened(true);
  };

  const openAlertModal = () => {
    setIsAlertModalOpened(true);
  };

  const openPromptModal = () => {
    setIsPromptModalOpened(true);
  };

  const openAgreementModal = () => {
    setIsAgreementModalOpened(true);
  };

  const handleClose = () => {
    setIsBasicModalOpened(false);
    setIsConfirmModalOpened(false);
    setIsAlertModalOpened(false);
    setIsPromptModalOpened(false);
    setIsAgreementModalOpened(false);
  };

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
      text: "마케팅 정보 수신 동의",
      details: "",
    },
  ];

  return (
    <>
      {isBasicModalOpened && (
        <BasicModal
          modalPosition={modalPosition}
          modalSize="medium"
          closeType={closeType}
          titleText={titleText}
          onClose={handleClose}
          isCloseFocus={true}
        >
          <CardNumberInput />
          <CardCVCInput />
        </BasicModal>
      )}
      {isConfirmModalOpened && (
        <ConfirmModal
          modalPosition={modalPosition}
          modalSize="large"
          closeType="none"
          titleText="카드를 삭제하시겠습니까?"
          onClose={handleClose}
          onConfirm={() => {
            alert("삭제되었습니다.");
            handleClose();
          }}
          onCancel={() => {
            alert("취소버튼을 눌렀습니다");
            handleClose();
          }}
          descriptionText="삭제하면 복구하실 수 없습니다."
        ></ConfirmModal>
      )}
      {isAlertModalOpened && (
        <AlertModal
          modalPosition={modalPosition}
          modalSize="large"
          closeType="none"
          titleText="카드를 삭제하시겠습니까?"
          onClose={handleClose}
          descriptionText="삭제하면 복구하실 수 없습니다."
        />
      )}
      {isAlertModalOpened && (
        <AlertModal
          modalPosition={modalPosition}
          modalSize="large"
          closeType="none"
          titleText="카드를 삭제하시겠습니까?"
          onClose={handleClose}
          descriptionText="삭제하면 복구하실 수 없습니다."
        />
      )}
      {isPromptModalOpened && (
        <PromptModal
          modalPosition="center"
          modalSize="large"
          closeType="none"
          titleText="쿠폰 번호를 입력해주세요"
          onClose={handleClose}
        />
      )}
      {isAgreementModalOpened && (
        <AgreementModal
          modalPosition="bottom"
          modalSize="large"
          closeType="none"
          titleText="약관에 동의해 주세요"
          onClose={handleClose}
          agreementContents={agreementContents}
          descriptionText="필수 약관에 동의하셔야 서비스 이용이 가능합니다."
        />
      )}
      <div className="button-container">
        <button className="click-me-button" onClick={openBasicModal}>
          베이직 모달 열기
        </button>
        <button className="click-me-button" onClick={openAlertModal}>
          Alert 모달 열기
        </button>
        <button className="click-me-button" onClick={openConfirmModal}>
          Confirm 모달 열기
        </button>
        <button className="click-me-button" onClick={openPromptModal}>
          Prompt Modal 모달 열기
        </button>
        <button className="click-me-button" onClick={openAgreementModal}>
          AgreeMdoal 열기
        </button>
      </div>
    </>
  );
}

export default App;
