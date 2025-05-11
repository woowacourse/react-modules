import { useState } from "react";
import useModalState from "./lib/hooks/useModalState";
import Prompt from "./lib/Prompt/Prompt";

function App() {
  const { isOpen, modalClose, modalOpen } = useModalState(true);
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <button onClick={() => modalOpen()}>모달 열기</button>
      {/* <Alert
        open={isOpen}
        modalClose={modalClose}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
        buttonText="확인"
        size="medium"
        position="center"
      /> */}
      {/* <Confirm
        open={isOpen}
        modalClose={modalClose}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
        closeButtonText="취소"
        checkButtonText="확인"
        size="medium"
        position="center"
        onCheckButtonClick={() => console.log("확인 버튼 클릭")}
      /> */}
      <Prompt
        open={isOpen}
        modalClose={modalClose}
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
