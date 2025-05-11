import { useState } from "react";
import { BasicModal } from "@dev-dino22/modal-components";

export default {
  title: "Modals/BasicModal",
  component: BasicModal,
};

export const Default = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>기본 모달 열기 버튼</button>
      {isOpened && (
        <BasicModal
          modalPosition="center"
          modalSize="medium"
          closeType="top"
          titleText="기본 모달"
          onClose={onCloseHandler}
        >
          <div>여기에 원하는 내용을 넣으세요.</div>
        </BasicModal>
      )}
    </>
  );
};
