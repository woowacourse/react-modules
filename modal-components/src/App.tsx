import { Modal, useModal } from "@dev-dino22/modal-components";
import "./App.css";

function App({
  modalType,
  closeType,
  titleText,
}: {
  modalType: "center" | "bottom";
  closeType: "top" | "bottom";
  titleText: string;
  children?: React.ReactNode;
}) {
  const { isModalOpened, openModalHandler, closeModalHandler } = useModal();
  const onClickHandler = () => {
    openModalHandler();
  };

  const handleClose = () => {
    console.log("닫힘");
    closeModalHandler();
  };

  return (
    <>
      {isModalOpened && (
        <Modal
          modalType={modalType}
          closeType={closeType}
          titleText={titleText}
          onClose={handleClose}
        >
          <p>Test!!!!!!</p>
          <p>Test!!!!!!</p>
          <p>Test!!!!!!</p>
          <p>Test!!!!!!</p>
        </Modal>
      )}
      <div className="button-container">
        <button className="click-me-button" onClick={onClickHandler}>
          click me!!
        </button>
      </div>
    </>
  );
}

export default App;
