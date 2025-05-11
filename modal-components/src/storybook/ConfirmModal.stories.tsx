import { useState } from "react";
import { ConfirmModal } from "@dev-dino22/modal-components";

export default {
  title: "Modals/ConfirmModal",
  component: ConfirmModal,
};

export const Default = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>Confirm 모달 열기 버튼</button>
      {isOpened && (
        <ConfirmModal
          modalPosition="center"
          modalSize="large"
          closeType="none"
          titleText="카드를 삭제하시겠습니까?"
          descriptionText="삭제하면 복구하실 수 없습니다."
          onClose={onCloseHandler}
          onConfirm={() => {
            alert("삭제되었습니다.");
            onCloseHandler();
          }}
          onCancel={() => {
            alert("취소버튼을 눌렀습니다");
            onCloseHandler();
          }}
        />
      )}
    </>
  );
};
