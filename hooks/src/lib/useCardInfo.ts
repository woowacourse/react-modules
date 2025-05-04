import { useState } from 'react';
import { CardInfo } from './types/Card';
import { DeepPartial } from './types/utils';

export function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    number: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    expiration: {
      month: '',
      year: '',
    },
    company: '',
    cvc: '',
    passwordFront: '',
  });

  function setCardInfoDetail(patch: DeepPartial<CardInfo>) {
    setCardInfo((prev) => ({
      ...prev,
      ...(patch.number && {
        number: {
          ...prev.number,
          ...patch.number,
        },
      }),
      ...(patch.expiration && {
        expiration: {
          ...prev.expiration,
          ...patch.expiration,
        },
      }),
      ...(patch.company !== undefined && { company: patch.company }),
      ...(patch.cvc !== undefined && { cvc: patch.cvc }),
      ...(patch.passwordFront !== undefined && { passwordFront: patch.passwordFront }),
    }));
  }

  return { cardInfo, setCardInfoDetail };
}

export default useCardInfo;
