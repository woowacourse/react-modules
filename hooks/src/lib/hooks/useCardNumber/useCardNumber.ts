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
  const [cardType, setCardType] = useState('Unknown');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // 카드 번호가 들어오면 카드의 타입을 검사하고 공통 유효성 검사(14~16자리, 숫자만 입력 가능)을 한다.
    // 카드 타입과 카드 길이를 받으면 카드 길이가 유효한지를 검사한다.
    const { type, numberLengths } = getCardType({ cardNumber: newValue, cardRules: cardRules });

    const { isValid, errorMessage } = validateCardInput(newValue, numberLengths);

    setCardNumbers(newValue);
    setCardType(type);

    if (!isValid) {
      setErrorMessage(errorMessage);
    } else {
      setErrorMessage('');
    }
  };

  return {
    cardNumbers,
    errorMessage,
    isValid: errorMessage === '',
    cardType,
    handleCardNumberChange,
  };
};

const CARD_BRANDS = {
  Visa: 'Visa',
  MasterCard: 'MasterCard',
  Unknown: 'Unknown',
} as const;

type CardType = keyof typeof CARD_BRANDS;

const isCardType = (cardType: string): cardType is CardType => {
  return cardType in CARD_BRANDS;
};

interface CardRule {
  type: CardType;
  match: (cardNumber: string) => boolean;
  numberLengths: number;
}

const cardRules: CardRule[] = [
  {
    type: 'Visa',
    // Visa 카드 번호는 4로 시작합니다.
    match: (cardNumber: string) => /^4[0-9]/.test(cardNumber),
    numberLengths: 16,
  },
  {
    type: 'MasterCard',
    // MasterCard 카드 번호는 51~55로 시작합니다.
    match: (cardNumber: string) => /^5[1-5][0-9]/.test(cardNumber),
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
    type: 'Unknown',
    numberLengths: 16,
  };
};
