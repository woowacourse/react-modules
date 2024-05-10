import { ChangeEvent, FocusEvent, useState } from 'react';

import { useCardNumbers } from '../lib';
import { UseCardNumbersErrorMessage, UseCardNumbersProps } from '../lib/hooks/useCardNumbers';

export default function CardNumbers() {
  const [numbers, setNumbers] = useState('');

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const errorMessages: UseCardNumbersErrorMessage = {
    empty: '카드 번호를 입력해주세요.',
    number: '숫자만 사용 가능해요.',
    length: '최소 14개 숫자를 입력해주세요.',
    brand: '카드 브랜드를 찾을 수 없어요.',
  };

  const useCardNumbersProps: UseCardNumbersProps = {
    numbers,
    errorMessages,
    isNeedValidValue: true,
  };

  const { validationErrorMessage, validationResult, formattedValue, brand } = useCardNumbers(useCardNumbersProps);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowErrorMessage(true);
    setNumbers(e.target.value);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setShowErrorMessage(true);
    setNumbers(e.target.value);
  };

  return (
    <div>
      <h4>Card Numbers</h4>
      <input type="text" maxLength={16} data-testid={`card-number-input`} onChange={handleChange} onBlur={handleBlur} />
      <div>numbers: {formattedValue?.join('-')}</div>
      <div data-testid="card-numbers-error">{validationResult.error}</div>
      <div data-testid="card-numbers-error-message">{showErrorMessage && validationErrorMessage}</div>
      <div data-testid="card-brand">{brand || 'etc'}</div>
    </div>
  );
}
