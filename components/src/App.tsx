import { useState } from "react";
import useModalState from "./lib/hooks/useModalState";
import Prompt from "./lib/Prompt/Prompt";
import { Alert, Confirm } from "./lib";

function App() {
  const {
    isOpen: isAlertOpen,
    modalClose: alertClose,
    modalOpen: alertOpen,
  } = useModalState(false);

  const {
    isOpen: isPromptOpen,
    modalClose: promptClose,
    modalOpen: promptOpen,
  } = useModalState(false);

  const {
    isOpen: isConfirmOpen,
    modalClose: confirmClose,
    modalOpen: confirmOpen,
  } = useModalState(false);

  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <button onClick={() => alertOpen()}>Alert 모달 열기</button>
      <button onClick={() => confirmOpen()}>Confirm 모달 열기</button>
      <button onClick={() => promptOpen()}>Prompt 모달 열기</button>
      <Alert
        open={isAlertOpen}
        modalClose={alertClose}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
        buttonText="확인"
        size="medium"
        position="center"
      />
      <Confirm
        open={isConfirmOpen}
        modalClose={confirmClose}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
        closeButtonText="취소"
        checkButtonText="확인"
        size="medium"
        position="center"
        onCheckButtonClick={() => console.log("확인 버튼 클릭")}
      />
      <Prompt
        open={isPromptOpen}
        modalClose={promptClose}
        title="아이디를 입력해 주세요."
        value={value}
        onChange={handleChange}
        closeButtonText="취소"
        checkButtonText="확인"
        size="medium"
        position="center"
        onCheckButtonClick={() => {
          console.log(value);
          setValue("");
        }}
      />
    </>
  );
}

export default App;
