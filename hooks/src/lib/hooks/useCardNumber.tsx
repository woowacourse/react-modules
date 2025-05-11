import { useState } from 'react';
import { parseNumber } from '../utils/parseNumber';

function formatByGroups(value: string, groups: number[]) {
  const result = [];
  let cursor = 0;
  const lastIdx = groups.length - 1;

  for (let i = 0; i < groups.length; i++) {
    let part;
    if (i < lastIdx) {
      part = value.slice(cursor, cursor + groups[i]);
      cursor += groups[i];
      if (!part) break;
      result.push(part);
    } else {
      part = value.slice(cursor);
      if (part) result.push(part);
    }
  }

  return result;
}

const makeNumbers = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
    String
  );
};

const rules = [
  // Visa
  {
    cardBrand: 'Visa',
    startNumbers: ['4'],
    lengthArray: [4, 4, 4, 4],
    message: '4-4-4-4 형태의 16자리로 입력해주세요',
  },
  // MasterCard
  {
    cardBrand: 'MasterCard',
    startNumbers: ['51', '52', '53', '54', '55'],
    lengthArray: [4, 4, 4, 4],
    message: '4-4-4-4 형태의 16자리로 입력해주세요',
  },
  // Diners
  {
    cardBrand: 'Diners',
    startNumbers: ['36'],
    lengthArray: [4, 6, 4],
    message: '4-6-4 형태의 14자리로 입력해주세요',
  },
  // AMEX
  {
    cardBrand: 'AMEX',
    startNumbers: ['34', '37'],
    lengthArray: [4, 6, 5],
    message: '4-6-5 형태의 15자리로 입력해주세요',
  },
  // UnionPay
  {
    cardBrand: 'UnionPay',
    startNumbers: [
      ...makeNumbers(622126, 622925),
      ...makeNumbers(624, 626),
      makeNumbers(6282, 6288),
    ],
    lengthArray: [4, 4, 4, 4],
    message: '4-4-4-4 형태의 16자리로 입력해주세요',
  },
  // 기본 16글자
  {
    startNumbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    lengthArray: [4, 4, 4, 4],
    message: '4-4-4-4 형태의 16자리로 16자리로 입력해주세요',
  },
];

const validate = (cardNumbersValue: string) => {
  const cardNumbers = cardNumbersValue.replace(/' '/g, '');

  const rule = rules.find(({ startNumbers }) => {
    return startNumbers.find((startNumber) => {
      const startNummberLength = startNumber.length;
      return cardNumbers.slice(0, startNummberLength) === startNumber;
    });
  });

  if (!rule)
    return {
      isError: false,
      message: '',
    };

  const { lengthArray } = rule;
  const totalLength = lengthArray.reduce((a, b) => a + b, 0);

  let isError = false;
  let message = '';

  if (totalLength !== cardNumbers.length) {
    isError = true;
    message = rule.message;
  }

  const formatted = formatByGroups(cardNumbers, lengthArray);

  return {
    isError,
    message,
    cardBrand: rule.cardBrand,
    formatted,
    lengthArray,
  };
};

function useCardNumber() {
  const [value, setCardNumber] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const parsedvalue = parseNumber(originValue);
    setCardNumber(parsedvalue);
  };

  const { isError, message, cardBrand, formatted } = validate(value);

  return {
    cardBrand,
    formatted,
    isError,
    errorMessage: message,
    onChange,
  };
}

export default useCardNumber;
