import { MouseEvent, useState } from 'react';
import { useCardIssuer } from '../lib/index';
import { UseCardIssuerProps } from '../lib/useCardIssuer';

const cardIssuerProps = (issuerValue: string): UseCardIssuerProps => ({
  issuerValue,
  errorMessages: {
    empty: '카드 발급사 선택해주세요.',
    issuer: '올바른 카드 발급사를 선택해주세요.',
  },
  validation: { issuers: ['배민', '카카오', '현대'] },
});

export default function CardIssuer() {
  const [issuer, setIssuer] = useState('');
  const [showError, setShowError] = useState(false);

  const { validationErrorMessage, validationResult } = useCardIssuer(cardIssuerProps(issuer));
  const { isFilledValue, isValidIssuer } = validationResult;

  const handleClick = (e: MouseEvent<HTMLFieldSetElement>) => {
    setShowError(true);
    if (!(e.target instanceof HTMLButtonElement)) return;
    setIssuer(e.target.name);
  };

  const handleClickClose = () => {
    setShowError(true);
  };

  const className = showError && !(isFilledValue && isValidIssuer) ? 'error' : undefined;

  return (
    <div>
      <fieldset className={className} data-testid="card-issuer-fieldset" onClick={handleClick}>
        <button name="카카오">카카오</button>
        <button name="현대">현대</button>
        <button name="배민">배민</button>
      </fieldset>
      <button onClick={handleClickClose}>close</button>
      <div data-testid="card-issuer-error">{showError && validationErrorMessage}</div>
    </div>
  );
}
