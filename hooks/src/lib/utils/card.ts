export type CardType = 'DEFAULT' | 'VISA' | 'MASTERCARD' | 'DINERS' | 'AMEX' | 'UNIONPAY';

export const getCardType = (cardNumber: string): CardType => {
  const firstDigits = cardNumber.charAt(0);
  const secondDigits = cardNumber.slice(0, 2);
  const thirdDigits = cardNumber.slice(0, 3);
  const fourthDigits = cardNumber.slice(0, 4);
  const sixthDigits = cardNumber.slice(0, 6);

  if (firstDigits === '4') return 'VISA';

  if (firstDigits === '3') {
    if (secondDigits === '36') return 'DINERS';
    if (secondDigits === '34' || secondDigits === '37') return 'AMEX';
  }

  if (firstDigits === '5' && Number(secondDigits) >= 51 && Number(secondDigits) <= 55)
    return 'MASTERCARD';

  if (firstDigits === '6') {
    if (Number(thirdDigits) >= 624 && Number(thirdDigits) <= 626) return 'UNIONPAY';
    if (thirdDigits === '622' && Number(sixthDigits) >= 622126 && Number(sixthDigits) <= 622925)
      return 'UNIONPAY';
    if (thirdDigits === '628' && Number(fourthDigits) >= 6282 && Number(fourthDigits) >= 6288)
      return 'UNIONPAY';
  }

  return 'DEFAULT';
};

export const formatCardNumber = (cardType: CardType, cardNumber: string) => {
  if (cardType === 'DINERS' || cardType === 'AMEX') {
    const formatted = [cardNumber.slice(0, 4), cardNumber.slice(4, 10), cardNumber.slice(10)];
    return formatted.filter((el) => el).join(' ');
  }

  const formatted = [
    cardNumber.slice(0, 4),
    cardNumber.slice(4, 8),
    cardNumber.slice(8, 12),
    cardNumber.slice(12),
  ];
  return formatted.filter((el) => el).join(' ');
};
