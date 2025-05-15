import Modal from "./lib/Modal";
import { useState } from "react";
import { css } from "@emotion/react";
import { createPortal } from "react-dom";
function App() {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");

  return (
    <>
      <div css={wrapper}>
        {createPortal(
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.BackDrop />
            {/* <Modal.AlertContainer
            title="아이디를 입력해 주세요."
            description="아이디는 필수로 입력해야 합니다."
            // size="medium"
          /> */}
            {/* <Modal.ConfirmContainer
            title="카드를 삭제하시겠습니까?"
            description="삭제하면 복구하실 수 없습니다."
            // onClick={() => alert("닫는다.")}
            // size="medium"
          /> */}

            <Modal.PromptContainer
              size="medium"
              title="쿠폰 번호를 입력해 주세요."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onClick={() => console.log(value)}
              // size="medium"
            />
            {/* <Modal.Container size="large">
              <Modal.Header className="blue" style={{ color: "red" }} closeButton>
                <Modal.Title>Title</Modal.Title>
              </Modal.Header>
              <Modal.Body className="blue" style={{ color: "red" }}>
                <Modal.Input />
              </Modal.Body>
              <Modal.Footer>
                <Modal.Trigger>
                  <Modal.Button>취소</Modal.Button>
                  <Modal.Button onClick={() => console.log("확인")}>확인</Modal.Button>
                </Modal.Trigger>
              </Modal.Footer>
            </Modal.Container> */}
          </Modal>,
          document.body,
        )}
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
