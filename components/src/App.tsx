import { ModalComponent, useModal } from './lib';
import { ModalProps } from './lib/types/modalTypes';
import './App.css';

function App({ modalType, closeType, titleText, ...otherProps }: ModalProps) {
  const { openModalHandler } = useModal();
  const onClickHandler = () => {
    openModalHandler();
  };

  return (
    <>
      <ModalComponent
        modalType={modalType}
        closeType={closeType}
        titleText={titleText}
        {...otherProps}
      >
        <p>Test!!!!!!</p>
        <p>Test!!!!!!</p>
        <p>Test!!!!!!</p>
        <p>Test!!!!!!</p>
      </ModalComponent>
      <div className="button-container">
        <button className="click-me-button" onClick={onClickHandler}>
          click me!!
        </button>
      </div>
    </>
  );
}

export default App;
