import { ChangeEvent, FocusEvent, useState } from 'react';
import useCardType from '../common/useCardType';
import Validation from '../utils/validation';

interface InitialValueProps {
  value: string;
  length: number;
}

interface CardNumberState extends InitialValueProps {
  id: number;
  isError: boolean;
}

const useCardNumbers = (initialValues: InitialValueProps[]) => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberState[]>(
    initialValues.map((initialValue, index) => ({ ...initialValue, isError: false, id: index })),
  );
  const [errorMessage, setErrorMessage] = useState('');
  const cardBrand = useCardType(cardNumbers.map(({ value }) => value));
  const isValid = cardNumbers.every(({ value, isError }) => value !== '' && !isError);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newCardNumbers = [...cardNumbers];

    if (!Validation.isNumericPattern(e.target.value)) {
      newCardNumbers[index].isError = true;
      setCardNumbers(newCardNumbers);
      setErrorMessage('숫자만 입력할 수 있습니다.');

      return;
    }

    if (!Validation.isExactLength(cardNumbers[index].length, e.target.value)) {
      newCardNumbers[index].isError = true;
      setErrorMessage(`${cardNumbers[index].length}자리의 카드 번호를 입력해주세요.`);
    } else {
      newCardNumbers[index].isError = false;
      setErrorMessage('');
    }

    newCardNumbers[index].value = e.target.value;
    setCardNumbers(newCardNumbers);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>, index: number) => {
    const newCardNumbers = [...cardNumbers];

    if (!Validation.isExactLength(cardNumbers[index].length, e.target.value)) {
      newCardNumbers[index].isError = true;
      setErrorMessage(`${cardNumbers[index].length}자리의 카드 번호를 입력해주세요.`);
    }
  };

  return { cardNumbers, isValid, cardBrand, errorMessage, onChange: onChangeHandler, onBlur: onBlurHandler };
};

export default useCardNumbers;
