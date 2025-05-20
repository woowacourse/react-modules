import {
  buttonContainer,
  dialogContainer,
  input,
  inputContainer,
  titleStyle,
} from './PromptDialog.css';
import * as Dialog from '../../lib/Dialog';

const PromptDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Prompt Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content size="small">
          <div css={dialogContainer}>
            <h2 css={titleStyle}>쿠폰 번호를 입력해 주세요.</h2>
            <div css={inputContainer}>
              <input css={input} type="text" placeholder="CGEXX46Z" />
            </div>
            <div css={buttonContainer}>
              <Dialog.CloseButton>취소</Dialog.CloseButton>
              <Dialog.CloseButton>확인</Dialog.CloseButton>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PromptDialog;
