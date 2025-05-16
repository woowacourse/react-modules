import { useState } from "react";
import { PromptModal } from "@dev-dino22/modal-components";

export default {
  title: "Modals/PromptModal",
  component: PromptModal,
};

export const Default = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => {
    setIsOpened(false);
  };
  return (
    <>
      <button onClick={() => setIsOpened(true)}>프롬프트 모달 열기 버튼</button>
      {isOpened && (
        <PromptModal
          modalPosition="center"
          modalSize="large"
          closeType="top"
          titleText="쿠폰 번호를 입력해주세요"
          onClose={onCloseHandler}
          onCancel={() => {
            alert("취소버튼을 눌렀습니다");
            onCloseHandler();
          }}
          onConfirm={() => {
            alert("확인버튼을 눌렀습니다");
            onCloseHandler();
          }}
        />
      )}
    </>
  );
};
