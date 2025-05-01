import Modal from "./lib/Modal";
import { useState } from "react";
import { css } from "@emotion/react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div css={wrapper}>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default App;

const wrapper = css`
  position: relative;
  width: 500px;
  height: 100vh;
  background-color: red;
  margin: auto;
`;
