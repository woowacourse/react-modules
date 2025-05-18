import * as Dialog from '../../lib/Dialog';
import {
  buttonContainer,
  descriptionStyle,
  dialogContainer,
  titleStyle,
} from './ConfirmDialog.css';

const ConfirmDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Confirm Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <div css={dialogContainer}>
            <h2 css={titleStyle}>카드를 삭제하시겠습니까?</h2>
            <p css={descriptionStyle}>삭제하면 복구하실 수 없습니다.</p>
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

export default ConfirmDialog;
