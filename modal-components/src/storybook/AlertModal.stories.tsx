import { useState } from "react";
import AlertModal from "../lib/components/modals/AlertModal";

export default {
  title: "Modals/AlertModal",
  component: AlertModal,
};

export const Default = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>Alert 모달 열기 버튼</button>
      {isOpened && (
        <AlertModal
          modalPosition="center"
          modalSize="large"
          closeType="top"
          titleText="카드를 삭제하시겠습니까?"
          descriptionText="삭제하면 복구하실 수 없습니다."
          onClose={onCloseHandler}
        />
      )}
    </>
  );
};
