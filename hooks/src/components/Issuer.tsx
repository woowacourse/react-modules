import { MouseEvent } from 'react';
import { useCardIssuer } from '../lib/index';

export default function Issuer() {
  const { cardIssuer, setCardIssuer, errorMessage } = useCardIssuer({
    initialValue: '',
    validations: {
      onChange: {
        empty: '카드 발급사 선택해주세요.',
      },
    },
  });

  const handleClick = (e: MouseEvent<HTMLFieldSetElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    setCardIssuer(e.target.name);
  };

  const handleClickClose = () => {
    setCardIssuer(cardIssuer || '');
  };

  return (
    <div>
      <h3>card issuer</h3>

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
