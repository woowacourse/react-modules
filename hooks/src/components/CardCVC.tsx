import { ChangeEvent, FocusEvent, useState } from 'react';
import { useCVC } from '../lib';
import { UseCardCVCProps } from '../lib/useCVC';

const LENGTH = 3;

const useCVCProps = (cardCVC: string): UseCardCVCProps => ({
  errorMessages: {
    empty: '값을 입력해주세요.',
    number: '숫자만 입력 가능해요.',
    length: '세자리 숫자여야 합니다.',
  },
  cardCVC,
  validation: {
    length: LENGTH,
  },
  isNeedValidValue: true,
});

export default function CardCVC() {
  const [cardCVC, setCardCVC] = useState('');
  const [showError, setShowError] = useState(false);

  const { validationErrorMessage, formattedValue, validationResult } = useCVC(useCVCProps(cardCVC));
  const { isFilledValue, isValidNumber, isValidLength } = validationResult;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardCVC(e.target.value);
    setShowError(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setCardCVC(e.target.value);
    setShowError(true);
  };

  const className = showError && !(isFilledValue && isValidNumber && isValidLength) ? 'error' : undefined;

  return (
    <div>
      <h3>card cvc</h3>
      <input
        className={className}
        value={formattedValue}
        type="text"
        data-testid="card-cvc-input"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div data-testid="card-cvc-error">{showError && validationErrorMessage}</div>
    </div>
  );
}
