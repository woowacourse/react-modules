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

  return (
    <>
      {isBasicModalOpened && (
        <BasicModal
          modalPosition={modalPosition}
          modalSize="medium"
          closeType={closeType}
          titleText={titleText}
          onClose={handleClose}
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
