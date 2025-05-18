import { useInput } from './lib';
import ModalExample from './ModalExample';
import { ModalInput } from './lib';

function ModalTypeContents() {
  const { value, handleChange, reset } = useInput();

  const handlePromptModalClose = () => {
    console.log(value);
    if (value) {
      reset();
    }
  };

  const handleConfirmModalClose = (type: string) => {
    console.log(type);
  };

  return (
    <div className="button-container">
      <ModalExample
        type="확인(Alert)"
        modalPosition="center"
        modalType="alert"
        closeType="none"
        titleText="아이디를 입력해 주세요."
        onClose={() => handleConfirmModalClose('alert')}
      >
        <p style={{ color: 'black', margin: '16px 0px' }}>아이디는 필수로 입력해야 합니다.</p>
      </ModalExample>

      <ModalExample
        type="확인/취소(Confirm)"
        modalPosition="center"
        modalType="confirm"
        closeType="none"
        titleText="카드를 삭제하시겠습니까?"
        onClose={() => handleConfirmModalClose('confirm')}
      >
        <p style={{ color: 'black', margin: '16px 0px' }}>삭제하면 복구하실 수 없습니다.</p>
      </ModalExample>

      <ModalExample
        type="입력(Prompt)"
        modalPosition="center"
        modalType="prompt"
        closeType="none"
        titleText="쿠폰 번호를 입력해 주세요."
        onClose={handlePromptModalClose}
      >
        <ModalInput placeholder="입력해 주세요." initialValue={value} onChange={handleChange} />
      </ModalExample>
    </div>
  );
}

export default ModalTypeContents;
