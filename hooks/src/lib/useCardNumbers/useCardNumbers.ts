import { ChangeEvent, FocusEvent, useState } from 'react';
import Validation from '../utils/validation';
import sliceCreditCardNumber from '../utils/sliceCreditCardNumber';

type ErrorType = {
  state: boolean;
  message: string;
};

const validateCardBrand = (value: string) => {
  if (Validation.isVisa(value)) {
    return { brand: 'visa', format: [4, 4, 4, 4] };
  }

  if (Validation.isMastercard(value)) {
    return { brand: 'mastercard', format: [4, 4, 4, 4] };
  }

  if (Validation.isDiners(value)) {
    return { brand: 'diners', format: [4, 6, 4] };
  }

  if (Validation.isAmex(value)) {
    return { brand: 'amex', format: [4, 6, 5] };
  }

  if (Validation.isUnionpay(value)) {
    return { brand: 'unionpay', format: [4, 4, 4, 4] };
  }

  return { brand: '', format: [4, 4, 4, 4] };
};

const useCardNumber = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ErrorType>({ state: false, message: '' });
  const [brand, setBrand] = useState('');
  const [format, setFormat] = useState<number[]>([4, 4, 4, 4]);
  const number = value.replaceAll('-', '');

  const isValid = value !== '' && !error.state;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!Validation.isNumericPattern(e.target.value)) {
      setError({ state: true, message: '숫자만 입력할 수 있습니다.' });
      return;
    }

    const cardInfo = validateCardBrand(e.target.value);
    const cardLength = cardInfo.format.reduce((acc, cur) => acc + cur);
    const replaceValue = e.target.value.replaceAll('-', '');

    setBrand(cardInfo.brand);
    setFormat(cardInfo.format);

    if (replaceValue.length > cardLength) return;

    if (!Validation.isExactLength(cardLength, replaceValue)) {
      setError({ state: true, message: `${cardLength}자리를 입력해주세요.` });
    } else {
      setError({ state: false, message: '' });
    }

    setValue(sliceCreditCardNumber(replaceValue, format).join('-'));
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    const length = format.reduce((acc, cur) => acc + cur);
    const replaceValue = e.target.value.replaceAll('-', '');

    if (!Validation.isExactLength(length, replaceValue)) {
      setError({ state: true, message: `${length}자리를 입력해주세요.` });
    } else {
      setError({ state: false, message: '' });
    }
  };

  return { value, error, isValid, number, brand, onChange: onChangeHandler, onBlur: onBlurHandler };
};

export default useCardNumber;
