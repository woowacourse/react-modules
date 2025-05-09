import Alert from "./lib/Alert";
import useModalState from "./lib/hooks/useModalState";

function App() {
  const { isOpen, modalClose, modalOpen } = useModalState(true);

  return (
    <>
      <button onClick={() => modalOpen()}>모달 열기</button>
      <Alert
        open={isOpen}
        modalClose={modalClose}
        title="아이디를 입력해 주세요."
        content="아이디는 필수로 입력해야 합니다."
        buttonText="확인"
        size="medium"
        position="center"
      />
    </>
  );
}

export default App;
