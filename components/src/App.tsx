import { Modal, useModal, ModalProvider } from './lib';
import './App.css';

function ModalOpenButton({ type }: { type: string }) {
  const { openModalHandler } = useModal();

  return (
    <>
      <button className="click-me-button" onClick={openModalHandler}>
        {type} 모달
      </button>
    </>
  );
}

function ModalContents() {
  return (
    <div className="button-container">
      <ModalProvider modalType={'center'} closeType={'top'} titleText={'titleText'}>
        <ModalOpenButton type="중앙" />
        <Modal>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
        </Modal>
      </ModalProvider>

      <ModalProvider modalType={'bottom'} closeType={'top'} titleText={'titleText'}>
        <ModalOpenButton type="하단(상단 닫기)" />
        <Modal>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
        </Modal>
      </ModalProvider>

      <ModalProvider modalType={'bottom'} closeType={'bottom'} titleText={'titleText'}>
        <ModalOpenButton type="하단(하단 닫기)" />
        <Modal>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
        </Modal>
      </ModalProvider>
    </div>
  );
}

function App() {
  return <ModalContents />;
}

export default App;
