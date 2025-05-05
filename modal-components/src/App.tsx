import { Modal, useModal } from "./lib";
import "./App.css";
import {
  useCardNumbersInput,
  useCardCVCInput,
} from "../../payments-hooks/src/lib";

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
  const { isModalOpened, openModalHandler, closeModalHandler } = useModal();
  const onClickHandler = () => {
    openModalHandler();
  };

  const handleClose = () => {
    closeModalHandler();
  };

  return (
    <>
      {isModalOpened && (
        <Modal
          modalPosition={modalPosition}
          closeType={closeType}
          titleText={titleText}
          onClose={handleClose}
        >
          <CardNumberInput />
          <CardCVCInput />
        </Modal>
      )}
      <div className="button-container">
        <button className="click-me-button" onClick={onClickHandler}>
          모달 열기
        </button>
      </div>
    </>
  );
}

export default App;
