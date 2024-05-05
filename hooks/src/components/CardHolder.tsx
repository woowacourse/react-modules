import { ChangeEvent, FocusEvent, useState } from 'react';

import { useCardHolder } from '../lib';
import { UseCardHolderProps } from '../lib/hooks/useCardHolder';

const useCardHolderProps = (cardHolder: string): UseCardHolderProps => ({
  cardHolder,
  errorMessages: {
    alphabet: '알파벳만 입력해주세요.',
    empty: '소유자 이름을 입력해주세요.',
    length: '소유자 이름은 10자 이하로만 작성하실 수 있어요.',
  },
  validation: {
    maxLength: 10,
    isOnlyUpperCase: false,
  },

  isNeedValidValue: true,
  isNeedUpperCase: true,
});

export default function CardHolder() {
  const [value, setValue] = useState('');
  const [showError, setShowError] = useState(false);

  const { validationErrorMessage, formattedValue, validationResult } = useCardHolder(useCardHolderProps(value));
  const { isFilledValue, isValidAlphabet, isValidLength } = validationResult;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowError(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowError(true);
  };

  const className = showError && !(isFilledValue && isValidAlphabet && isValidLength) ? 'error' : undefined;

  return (
    <div>
      <h3>card holder</h3>
      <input
        data-testid="card-holder-input"
        className={className}
        value={formattedValue}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div data-testid="card-holder-error">{showError && validationErrorMessage}</div>
    </div>
  );
}
