import { Validator, ValueOf } from '../type';

import getErrorMessage from '../utils/getErrorMessage';
import getOnChange from '../utils/getOnChange';
import { useState } from 'react';

export default function useCardIssuer() {
  const [cardIssuer, setCardIssuer] = useState('');

  const onChange = getOnChange(setCardIssuer);

  const errorMessage = getErrorMessage(cardIssuer, cardIssuerValidators);

  const isValid = errorMessage === null;

  return { cardIssuer, setCardIssuer, onChange, errorMessage, isValid };
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

type ErrorMessage = ValueOf<typeof CARD_ISSUER_ERROR_MESSAGE>;

const cardIssuerSet = new Set<string>(CARD_ISSUERS);

const cardIssuerValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (issuer: string) => cardIssuerSet.has(issuer),
    message: CARD_ISSUER_ERROR_MESSAGE.notIssuer,
  },
];
