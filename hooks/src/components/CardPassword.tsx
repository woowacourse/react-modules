import { ChangeEvent, FocusEvent, useState } from 'react';
import { usePassword } from '../lib';
import { UsePasswordProps } from '../lib/usePassword';

const LENGTH = 2;

const usePasswordProps = (cardPassword: string): UsePasswordProps => ({
  errorMessages: {
    empty: '값을 입력해주세요.',
    number: '숫자만 입력 가능해요.',
    length: '두자리 숫자여야 합니다.',
  },
  cardPassword,
  validation: {
    length: LENGTH,
  },
  isNeedValidValue: true,
});

export default function CardPassword() {
  const [cardPassword, setCardCVC] = useState('');
  const [showError, setShowError] = useState(false);

  const { validationErrorMessage, formattedValue, validationResult } = usePassword(usePasswordProps(cardPassword));
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
      <h3>card password</h3>
      <input
        className={className}
        value={formattedValue}
        type="text"
        data-testid="card-password-input"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div data-testid="card-password-error">{showError && validationErrorMessage}</div>
    </div>
  );
}
