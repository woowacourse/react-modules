import { CARD_BRAND } from './useCardNumber.constant';

/**
 * checkCardBrand - 카드 번호를 받아 카드의 브랜드를 판단하는 함수입니다.
 * @param { string } cardNumbers - 입력 받은 카드 번호입니다.
 * @returns {typeof CARD_BRAND[keyof typeof CARD_BRAND]} - 카드 브랜드의 정보입니다.
 */
export function checkCardBrand(cardNumbers: string): (typeof CARD_BRAND)[keyof typeof CARD_BRAND] {
  const firstDigit = Number(cardNumbers[0]);
  const firstTwoDigits = Number(cardNumbers.slice(0, 2));
  const firstThreeDigits = Number(cardNumbers.slice(0, 3));
  const firstFourDigits = Number(cardNumbers.slice(0, 4));
  const firstSixDigits = Number(cardNumbers.slice(0, 6));

  if (firstDigit === CARD_BRAND.visa.signature) {
    return CARD_BRAND.visa;
  } else if (firstTwoDigits >= CARD_BRAND.master.signature[0] && firstTwoDigits <= CARD_BRAND.master.signature[1]) {
    return CARD_BRAND.master;
  } else if (firstTwoDigits === CARD_BRAND.diners.signature) {
    return CARD_BRAND.diners;
  } else if (CARD_BRAND.amex.signature[0] === firstTwoDigits || CARD_BRAND.amex.signature[1] === firstTwoDigits) {
    return CARD_BRAND.amex;
  } else if (
    (firstSixDigits >= CARD_BRAND.union.signature[0][0] && firstSixDigits <= CARD_BRAND.union.signature[0][1]) ||
    (firstThreeDigits >= CARD_BRAND.union.signature[1][0] && firstThreeDigits <= CARD_BRAND.union.signature[1][1]) ||
    (firstFourDigits >= CARD_BRAND.union.signature[2][0] && firstFourDigits <= CARD_BRAND.union.signature[2][1])
  ) {
    return CARD_BRAND.union;
  } else {
    return CARD_BRAND.default;
  }
}

/**
 * formattingCardNumbers - 카드 브랜드별로 다른 포매팅 규칙에 따라 카드 번호를 포매팅해주는 함수입니다.
 * @param { String }cardNumber - 입력 받은 카드 번호 문자열입니다.
 * @param { readonly number [] }cardFormat - 카드 브랜드의 포매팅 규칙입니다.
 * @returns { string[] } - 포매팅된 카드 번호입니다.
 */
export function formattingCardNumbers(cardNumber: string, cardFormat: readonly number[]): string[] {
  const result = [];
  let startIndex = 0;

  for (const length of cardFormat) {
    if (startIndex < cardNumber.length) {
      const endIndex = startIndex + length;
      result.push(cardNumber.substring(startIndex, endIndex));
      startIndex += length;
    } else {
      result.push('');
    }
  }

  return result;
}

/**
 * formattingValue - 카드 브랜드에 따라 포매팅된 카드 번호 배열을 0000-0000-0000-0000 같은 형식의 배열로 반환하는 유틸 함수입니다.
 * @param { string[] } cardNumbers - 카드 브랜드에 따라 포매팅된 카드 번호 배열입니다.
 * @returns { string } - 빈 문자열을 제외한 카드 번호를 '-'로 join하여 반환합니다.
 */
export function formattingValue(cardNumbers: string[]): string {
  const filteredCardNumbers = cardNumbers.filter((number) => number.length !== 0);

  return filteredCardNumbers.join('-');
}

export const isFulledCardNumbers = (cardNumbers: string, cardNumbersLength: number) =>
  cardNumbers.length === cardNumbersLength;

export const isCompletedInputCardNumber = (cardNumbers: string[], isCardNumberError: boolean) => {
  return cardNumbers.length === 4 && !isCardNumberError;
};
