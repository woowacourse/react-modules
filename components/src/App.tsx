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

function Step1ModalContents() {
  return (
    <div className="button-container">
      <ModalProvider modalType={'center'} closeType={'top'} titleText={'titleText'}>
        <ModalOpenButton type="중앙(size 미지정)" />
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

function Step2ModalContents() {
  return (
    <div className="button-container">
      <ModalProvider
        modalType={'center'}
        modalSize={'small'}
        closeType={'top'}
        titleText={'titleText'}
      >
        <ModalOpenButton type="중앙(small)" />
        <Modal>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
        </Modal>
      </ModalProvider>

      <ModalProvider
        modalType={'center'}
        modalSize={'medium'}
        closeType={'top'}
        titleText={'titleText'}
      >
        <ModalOpenButton type="중앙(medium)" />
        <Modal>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
        </Modal>
      </ModalProvider>

      <ModalProvider
        modalType={'center'}
        modalSize={'large'}
        closeType={'top'}
        titleText={'titleText'}
      >
        <ModalOpenButton type="중앙(large)" />
        <Modal>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
          <p style={{ color: 'black' }}>Test!!!!!!</p>
        </Modal>
      </ModalProvider>

      <ModalProvider modalType={'center'} closeType={'top'} titleText={'titleText'}>
        <ModalOpenButton type="중앙(size 미지정)" />
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
  return (
    <>
      <h1 style={{ color: 'black', margin: '20px 50px' }}>Step1 Modal</h1>
      <Step1ModalContents />
      <h1 style={{ color: 'black', margin: '20px 50px' }}>Step2 Modal</h1>
      <Step2ModalContents />
    </>
  );
}

export default App;
