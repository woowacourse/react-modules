import { CardBrand } from "../constants/CardBrand";
import { CARD_NUMBER_LENGTH } from "../validator/constants/card-number-length";
type FormatRule = number[] | ((len: number) => number[]);

/** default: 4자리씩 잘라주는 헬퍼 */
function dynamicChunks(length: number, chunkSize = 4): number[] {
  const parts: number[] = [];
  let rem = length;
  while (rem > 0) {
    parts.push(Math.min(chunkSize, rem));
    rem -= chunkSize;
  }
  return parts;
}

/** 카드사별 “특수” 포맷 패턴 */
// AMEX, DINERS, UNIONPAY 외 다른 카드사는 무시.

const SPECIAL_RULES: Partial<Record<CardBrand, number[]>> = {
  AMEX: [4, 6, 5], // 15자리 → 4-6-5
  DINERS: [4, 6, 4], // 14자리 → 4-6-4
  UNIONPAY: [4, 4, 4, 4], // 16자리 → 4-4-4-4
};

export function createFormatRulesFromLengths(): Record<CardBrand, FormatRule> {
  const rules = {} as Record<CardBrand, FormatRule>;
  (Object.keys(CARD_NUMBER_LENGTH) as CardBrand[]).forEach((brand) => {
    if (SPECIAL_RULES[brand]) {
      rules[brand] = SPECIAL_RULES[brand];
    } else {
      // 나머지(예: VISA, MASTERCARD, DEFAULT)는 4자리씩
      rules[brand] = (len: number) => dynamicChunks(len, 4);
    }
  });
  return rules;
}
