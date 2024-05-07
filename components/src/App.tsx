import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Modal } from "../../components/src/lib/Modal/Modal";
import { theme } from "../styles/theme";
import "./App.css";
import { ModalProvider, useModalContext } from "./lib/hooks/useModalContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <ModalOpener />
        <Modal
          modalPosition="bottom"
          title="컴포넌트를 어느정도까지 분리 해야할까요? 또 어떤 경우 컴포넌트를 그룹화해서 하나의 컴포넌트처럼 보이게 하는 것이 좋을까요?"
          closeButtonPosition="top"
        >
          <div>컴포넌트 내용</div>
          <ModalButton />
        </Modal>
      </ModalProvider>
    </ThemeProvider>
  );
}

const ModalOpener = () => {
  const { openModal } = useModalContext();
  return <button onClick={openModal}>열기</button>;
};

const ModalButton = () => {
  const { closeModal } = useModalContext();
  return <button onClick={closeModal}>닫기</button>;
};

export default App;
