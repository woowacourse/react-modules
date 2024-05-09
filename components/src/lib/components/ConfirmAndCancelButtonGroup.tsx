import { MouseEvent } from 'react';

import { BASIC_BUTTON_STYLE } from '../constants/modal';
import { ConfirmAndCancelButtonGroupProps, ExtraClickAction } from '../types/modal';

export default function ConfirmAndCancelButtonGroup({
  confirmButton,
  cancelButton,
  isConfirmButtonFirst = true,
  closeModal,
}: ConfirmAndCancelButtonGroupProps) {
  const buttonOrder = isConfirmButtonFirst ? [confirmButton, cancelButton] : [cancelButton, confirmButton];

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>, extraClickAction?: ExtraClickAction) => {
    if (extraClickAction) extraClickAction(e);
    closeModal();
  };
  return (
    <>
      {buttonOrder.map(({ contents, style, extraClickAction }) => (
        <button style={style || BASIC_BUTTON_STYLE} onClick={(e) => handleButtonClick(e, extraClickAction)}>
          {contents}
        </button>
      ))}
    </>
  );
}
