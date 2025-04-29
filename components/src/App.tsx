import { css } from "@emotion/react";
import "./App.css";
import Modal from "./lib/Modal";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Modal
        title="타이틀입니다"
        css={css`
          background-color: lightblue;
          /* padding: 20px; */
        `}
      >
        <h2>Modal Title</h2>
        <p>This is a modal content.</p>
      </Modal>
    </div>
  );
}

export default App;
