import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

/**
 *
 * @description
 * useCardNumber 훅은 카드 번호 입력을 관리하는 커스텀 훅입니다.
 * 카드 번호의 유효성을 검사하고, 입력값을 상태로 관리합니다.
 * @returns 카드 번호 입력 상태와 핸들러를 반환합니다.
 * @returns cardNumbers - 카드 번호 입력 상태 배열 (4개 항목)
 * @returns errorMessage 카드 번호 입력 오류 메시지
 * @returns isValid 카드 번호 입력 유효성 검사 결과
 * @returns handleCardNumberChange 카드 번호 입력 핸들러
 * @example
 * const { cardNumbers, errorMessage, isValid, handleCardNumberChange } = useCardNumber();
 * <input
 *   type="text"
 *   value={cardNumbers}
 *   onChange={(e) => handleCardNumberChange(e)}
 *   placeholder="카드 번호를 입력하세요"
 * />
 */
export const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [cardType, setCardType] = useState<CardType>('Unknown');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // 카드 번호가 들어오면 카드의 타입과 카드 길이를 반환한다.
    // 카드 타입과 카드 길이를 받으면 해당 카드 타입의 카드 길이가 유효한지를 검사한다.
    const newCardNumbers = value.replace(/\s/g, '');

    const { type, numberLengths } = getCardType({
      cardNumber: newCardNumbers,
      cardRules: cardRules,
    });
    const { errorMessage } = validateCardInput(newCardNumbers, numberLengths);

    if (newCardNumbers.length > numberLengths) {
      return;
    }

    setCardNumbers(newCardNumbers);
    setCardType(type);

    setErrorMessage(errorMessage);
  };

  return {
    cardNumber: {
      raw: cardNumbers,
      formatted: formatCardNumber({ type: cardType, cardNumber: cardNumbers }),
    },
    errorMessage,
    isValid: cardNumbers !== '' && errorMessage === '',
    cardType: cardType === CARD_BRANDS.Unknown ? '기본' : cardType,
    handleCardNumberChange,
  };
};

const formatCardNumber = ({ type, cardNumber }: { type: CardType; cardNumber: string }) => {
  // 카드 번호 사이에 공백을 추가하는 포맷팅 함수입니다.
  const formattedCardNumber = cardBrandFormatRules[type]
    .map((length) => {
      const chunk = cardNumber.slice(0, length);
      cardNumber = cardNumber.slice(length);
      return chunk;
    })
    .filter(Boolean);

  return formattedCardNumber.join(' ');
};

const VALID_CARD_BRANDS = {
  Visa: 'Visa',
  MasterCard: 'MasterCard',
  Diners: 'Diners',
  AMEX: 'AMEX',
  UnionPay: 'UnionPay',
} as const;

const CARD_BRANDS = {
  ...VALID_CARD_BRANDS,
  Unknown: 'Unknown',
} as const;

type ValidCardType = keyof typeof VALID_CARD_BRANDS;
type CardType = keyof typeof CARD_BRANDS;

const isCardType = (cardType: string): cardType is CardType => {
  return cardType in CARD_BRANDS;
};

interface CardRule {
  type: CardType;
  match: (cardNumber: string) => boolean;
  numberLengths: number;
}

const cardBrandRangeRules = {
  // 카드 브랜드별로 시작하는 카드 번호의 유효한 숫자 범위를 정의합니다.
  Visa: [{ start: 4, end: 4 }], // Visa 카드 번호는 4로 시작합니다.
  MasterCard: [{ start: 51, end: 55 }], // MasterCard 카드 번호는 51~55로 시작합니다.
  Diners: [{ start: 36, end: 36 }],
  AMEX: [
    { start: 34, end: 34 },
    { start: 37, end: 37 },
  ],
  UnionPay: [
    { start: 622126, end: 622925 },
    { start: 624, end: 626 },
    { start: 6282, end: 6288 },
  ],
} as const;

const cardBrandFormatRules = {
  // 카드 브랜드별로 카드 번호의 포맷을 정의합니다.
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  Diners: [4, 6, 4],
  AMEX: [4, 6, 5],
  UnionPay: [4, 4, 4, 4],
  Unknown: [4, 4, 4, 4],
} as const;

const checkCardBrandRange = ({ value, type }: { value: string; type: ValidCardType }) => {
  for (const { start, end } of cardBrandRangeRules[type]) {
    const needToCheckLength = start.toString().length;
    const convertedValue = Number.parseInt(value.slice(0, needToCheckLength), 10);

    if (convertedValue >= start && convertedValue <= end) {
      return true;
    }
  }

  return false;
};

const cardRules: CardRule[] = [
  {
    type: CARD_BRANDS.Visa,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.Visa }),
    numberLengths: 16,
  },
  {
    type: CARD_BRANDS.MasterCard,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.MasterCard }),
    numberLengths: 16,
  },
  {
    type: CARD_BRANDS.Diners,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.Diners }),
    numberLengths: 14,
  },
  {
    type: CARD_BRANDS.AMEX,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.AMEX }),
    numberLengths: 15,
  },
  {
    type: CARD_BRANDS.UnionPay,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.UnionPay }),
    numberLengths: 16,
  },
];

// cardRules를 순회하면서 카드 번호가 일치하는 규칙이 있으면 type과 numberLengths를 반환합니다.
export const getCardType = ({
  cardNumber,
  cardRules,
}: {
  cardNumber: string;
  cardRules: CardRule[];
}): Omit<CardRule, 'match'> => {
  for (const cardRule of cardRules) {
    const { type, match, numberLengths } = cardRule;
    if (match(cardNumber) && isCardType(type)) {
      return {
        type,
        numberLengths,
      };
    }
  }

  return {
    type: CARD_BRANDS.Unknown,
    numberLengths: 16,
  };
};
