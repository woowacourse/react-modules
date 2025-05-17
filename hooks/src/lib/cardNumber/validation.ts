export function isVisa(cardNumber: string): boolean {
  return cardNumber.startsWith('4');
}

export function isMasterCard(cardNumber: string): boolean {
  const firstTwo = Number(cardNumber.slice(0, 2));
  return firstTwo >= 51 && firstTwo <= 55;
}

export function isAmex(cardNumber: string): boolean {
  const firstTwo = cardNumber.slice(0, 2);
  return firstTwo === '34' || firstTwo === '37';
}

export function isDiners(cardNumber: string): boolean {
  const firstTwo = cardNumber.slice(0, 2);
  return firstTwo === '36';
}

export function isUnionPay(cardNumber: string): boolean {
  const firstSix = Number(cardNumber.slice(0, 6));
  const firstThree = Number(cardNumber.slice(0, 3));
  const firstFour = Number(cardNumber.slice(0, 4));

  const is622 = firstSix >= 622126 && firstSix <= 622925;
  const is624to626 = firstThree >= 624 && firstThree <= 626;
  const is6282to6288 = firstFour >= 6282 && firstFour <= 6288;

  return is622 || is624to626 || is6282to6288;
}
