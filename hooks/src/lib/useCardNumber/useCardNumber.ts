import { ChangeEvent, useState } from 'react';
import sliceCreditCardNumber from '../utils/sliceCreditCardNumber';
import useCardInfo from './useCardInfo';
import useCardNumberValidation from './useCardNumberValidation';

const useCardNumber = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const { error, checkNumericPattern, checkLength } = useCardNumberValidation();
  const { brand, updateCardInfo } = useCardInfo();

  const number = value.replaceAll('-', '');
  const isValid = value !== '' && !error.state;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!checkNumericPattern(inputValue)) return;

    const replaceValue = inputValue.replaceAll('-', '');
    const format = updateCardInfo(replaceValue);
    const formatCardNumber = sliceCreditCardNumber(replaceValue, format).join('-');
    const cardLength = format.reduce((acc, cur) => acc + cur);

    if (replaceValue.length > cardLength) return;

    checkLength(replaceValue, cardLength);
    setValue(formatCardNumber);
  };

  return { value, error, isValid, number, brand, onChange: onChangeHandler };
};

export default useCardNumber;
