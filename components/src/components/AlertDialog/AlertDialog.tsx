import { Dialog } from '../../lib';
import { AlertDialogLayout } from './AlertDialog.css';

const AlertDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger>Alert Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content>
          <section css={AlertDialogLayout}>
            <Dialog.Header>
              <div>
                <p>아이디를 입력해주세요.</p>
                <p>아이디는 필수로 입력해야 합니다.</p>
              </div>
            </Dialog.Header>
            <Dialog.CloseButton>확인</Dialog.CloseButton>
          </section>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  );
};

export default AlertDialog;
