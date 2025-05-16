import {
  CardTypeDialogHeaderContainer,
  CardTypeDialogLayout,
} from './CardTypeDialog.css';
import { cardGroup } from '../../assets';
import { Dialog } from '../../lib';

const CardTypeDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog.Root>
        <Dialog.Overlay />
        <Dialog.Content>
          <section css={CardTypeDialogLayout}>
            <div css={CardTypeDialogHeaderContainer}>
              <Dialog.Header>카드사 선택</Dialog.Header>
              <Dialog.CloseButton>X</Dialog.CloseButton>
            </div>
            <img src={cardGroup} alt="카드사 선택" />
          </section>
        </Dialog.Content>
      </Dialog.Root>
    </Dialog>
  );
};

export default CardTypeDialog;
