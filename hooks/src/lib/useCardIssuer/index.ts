import { Validator } from '../type';
import { useState } from 'react';

export default function useCardIssuer() {
  const [cardIssuer, setCardIssuer] = useState('');

  const errorMessage = cardIssuerValidators.reduce(
    (message: ErrorMessage | null, validator) => {
      if (message !== null) return message;
      if (validator.checkIsValid(cardIssuer)) return message;
      return validator.message;
    },
    null
  );

  const isValid = errorMessage === null;

  return { cardIssuer, setCardIssuer, errorMessage, isValid };
}

export const CARD_ISSUERS = [
  'BC카드',
  '신한카드',
  '카카오뱅크',
  '현대카드',
  '우리카드',
  '롯데카드',
  '하나카드',
  '국민카드',
] as const;

export type CardIssuer = typeof CARD_ISSUERS;

export const CARD_ISSUER_ERROR_MESSAGE = {
  notIssuer: '지정된 카드 발행사가 아닙니다.',
} as const;

type ErrorMessage =
  (typeof CARD_ISSUER_ERROR_MESSAGE)[keyof typeof CARD_ISSUER_ERROR_MESSAGE];

const cardIssuerSet = new Set<string>(CARD_ISSUERS);

const cardIssuerValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (issuer: string) => cardIssuerSet.has(issuer),
    message: CARD_ISSUER_ERROR_MESSAGE.notIssuer,
  },
];
