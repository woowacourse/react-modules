import formatCardNumber from './formatCardNumber';

export default function adjustCursorPosition(
  event: React.ChangeEvent<HTMLInputElement>,
  cardNumber: string,
  format: number[],
) {
  const cardNumberFormatted = formatCardNumber(cardNumber, format);
  const cursorPosition = getCursorPosition(event, cardNumberFormatted);

  window.requestAnimationFrame(() => {
    event.target.setSelectionRange(cursorPosition, cursorPosition);
  });
}

function getCursorPosition(
  event: React.ChangeEvent<HTMLInputElement>,
  cardNumberFormatted: string,
): number {
  let cursorPosition = event.target.selectionStart ?? 0;
  const inputEvent = event.nativeEvent;

  if (inputEvent instanceof InputEvent && inputEvent.inputType === 'deleteContentBackward') {
    if (cardNumberFormatted[cursorPosition - 1] === ' ') {
      cursorPosition -= 1;
    }
  }

  if (inputEvent instanceof InputEvent && inputEvent.inputType === 'insertText') {
    if (cardNumberFormatted[cursorPosition - 1] === ' ') {
      cursorPosition += 1;
    }
  }

  return cursorPosition;
}
