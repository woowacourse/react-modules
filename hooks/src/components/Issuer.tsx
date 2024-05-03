import { MouseEvent } from 'react';
import { useCardIssuer } from '../lib/index';

const cardIssuerProps = {
  validationErrorMessages: {
    empty: '카드 발급사 선택해주세요.',
    issuer: '올바른 카드 발급사를 선택해주세요.',
  },
  validations: { issuers: ['배민', '카카오', '현대'] },
};

export default function Issuer() {
  const { cardIssuer, updateValue, errorMessage } = useCardIssuer(cardIssuerProps);
  const handleClick = (e: MouseEvent<HTMLFieldSetElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    updateValue(e.target.name);
  };

  const handleClickClose = () => {
    updateValue(cardIssuer || '');
  };

  return (
    <div>
      <fieldset onClick={handleClick}>
        <button name="카카오">카카오</button>
        <button name="현대">현대</button>
        <button name="배민">배민</button>
      </fieldset>
      <button onClick={handleClickClose}>close</button>
      <div>오류:{errorMessage}</div>
    </div>
  );
}
