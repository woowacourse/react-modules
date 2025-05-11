import { CARD_BIN_PREFIX_LENGTH, DECIMAL_RADIX, DEFAULT_CARD_NUMBER_PATTERN } from '../constants';
import { CardFormats } from '../types';

export const getPatternByBin = (CARD_FORMATS: readonly CardFormats[], digits: string) => {
  const cardBinPrefix = parseInt(digits.slice(0, CARD_BIN_PREFIX_LENGTH), DECIMAL_RADIX);
  const matched = CARD_FORMATS.find((rule) => rule.match(cardBinPrefix, digits));

  return { name: matched?.name, pattern: matched?.pattern ?? DEFAULT_CARD_NUMBER_PATTERN };
};

export const formatByPattern = (digits: string, pattern: number[]): string => {
  const parts: string[] = [];
  let pointer = 0;

  for (const len of pattern) {
    const group = digits.slice(pointer, pointer + len);
    if (!group) break;
    parts.push(group);
    pointer += len;
  }

  return parts.join(' ');
};
