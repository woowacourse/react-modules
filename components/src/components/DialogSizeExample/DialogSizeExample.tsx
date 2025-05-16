import { Dialog } from '../../lib';
import {
  buttonContainer,
  dialogContent,
  triggerButtonsContainer,
} from './DialogSizeExample.css';

const DialogSizeExample = () => {
  return (
    <div>
      <h1>Dialog Size Examples</h1>
      <div css={triggerButtonsContainer}>
        <SmallDialog />
        <MediumDialog />
        <LargeDialog />
      </div>
    </div>
  );
};

const SmallDialog = () => (
  <Dialog>
    <Dialog.Trigger>Small Dialog</Dialog.Trigger>
    <Dialog.Root>
      <Dialog.Overlay />
      <Dialog.Content size="small">
        <div css={dialogContent}>
          <h2>Small Dialog</h2>
          <p>Small Dialog 예시입니다~</p>
          <div css={buttonContainer}>
            <Dialog.CloseButton>
              <button>Close</button>
            </Dialog.CloseButton>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  </Dialog>
);

const MediumDialog = () => (
  <Dialog>
    <Dialog.Trigger>Medium Dialog</Dialog.Trigger>
    <Dialog.Root>
      <Dialog.Overlay />
      <Dialog.Content size="medium">
        <div css={dialogContent}>
          <h2>Medium Dialog</h2>
          <p>Medium Dialog 예시입니다~</p>
          <p>이 사이즈는 더 복잡한 컨텐츠를 표시하기에 적합합니다.</p>
          <div css={buttonContainer}>
            <Dialog.CloseButton>
              <button>Close</button>
            </Dialog.CloseButton>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  </Dialog>
);

const LargeDialog = () => (
  <Dialog>
    <Dialog.Trigger>Large Dialog</Dialog.Trigger>
    <Dialog.Root>
      <Dialog.Overlay />
      <Dialog.Content size="large">
        <div css={dialogContent}>
          <h2>Large Dialog</h2>
          <p>Large Dialog 예시입니다~</p>
          <p>이 사이즈는 더 복잡한 컨텐츠를 표시하기에 적합합니다.</p>
          <div css={buttonContainer}>
            <Dialog.CloseButton>
              <button>Close</button>
            </Dialog.CloseButton>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  </Dialog>
);

export default DialogSizeExample;
