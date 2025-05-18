import { useState } from "react";
import { AgreementModal } from "@dev-dino22/modal-components";
import { agreementContents } from "./AgreementModalData";

export default {
  title: "Modals/AgreementModal",
  component: AgreementModal,
};

export const Default = () => {
  const [isOpened, setIsOpened] = useState(false);
  const onCloseHandler = () => setIsOpened(false);

  return (
    <>
      <button onClick={() => setIsOpened(true)}>
        약관 동의 모달 열기 버튼
      </button>
      {isOpened && (
        <AgreementModal
          modalPosition="bottom"
          modalSize="large"
          closeType="top"
          titleText="약관에 동의해 주세요"
          onClose={onCloseHandler}
          agreementContents={agreementContents}
          descriptionText="필수 약관에 동의하셔야 서비스 이용이 가능합니다."
        />
      )}
    </>
  );
};
