import { useEffect } from 'react';
import Validation from '../utils/validation';
import useValidation, { ValidationType } from '../common/useValidation';
import useMonthInput from './useMonthInput';
import useYearInput from './useYearInput';

const EXPIRATION_DATE_LENGTH = 2;

interface InitialValueProps {
  month: string;
  year: string;
}

const cardExpirationValidations: ValidationType<number[]>[] = [
  {
    validate: ([month, year]: number[]) => !Validation.isExpired([Number(month), Number(year)]),
    message: '유효기간이 만료된 카드입니다. 다른 카드를 등록해주세요.',
  },
];

const useCardExpirationDate = (initialValue: InitialValueProps = { month: '', year: '' }) => {
  const month = useMonthInput(initialValue.month);
  const year = useYearInput(initialValue.year);
  const { error, validateValue } = useValidation<number[]>();
  const expirationDateErrorMessage = month.error.state ? month.error.message : year.error.state ? year.error.message : error.state ? error.message : null;
  const isExpirationDateValid = month.isValid && year.isValid && !error.state;

  useEffect(() => {
    const isExactLength = Validation.isExactLength(EXPIRATION_DATE_LENGTH, month.value) && Validation.isExactLength(EXPIRATION_DATE_LENGTH, year.value);

    if (isExactLength) {
      validateValue([Number(month.value), Number(year.value)], cardExpirationValidations);
    }
  }, [month.value, year.value]);

  return { month, year, expirationDateError: error, isExpirationDateValid, expirationDateErrorMessage };
};

export default useCardExpirationDate;
