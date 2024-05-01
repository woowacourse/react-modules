import { useEffect } from 'react';
import useInput, { ValidationType } from './useInput';

type InitialValueType = [string, string];

const useCardExpirationDate = (initialValue: InitialValueType = ['', '']) => {
  const isValidLength = (value: string) => {
    return value.length === 2;
  };

  const isValidMonth = (value: string) => {
    const month = Number(value);

    return month >= 1 && month <= 12;
  };

  const isNumber = (value: string) => {
    return /^\d*$/.test(value);
  };

  const monthInputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: '2자리 월(MM)을 입력해주세요. ex) 01',
    },
    {
      validate: isValidMonth,
      message: '1부터 12사이의 숫자를 입력해주세요.',
    },
  ];

  const yearInputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: '2자리 년도(YY)를 입력해주세요. ex) 24',
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: '숫자만 입력 가능합니다.',
    },
  ];

  const month = useInput({ initialValue: initialValue[0], inputValidations: monthInputValidations, preventInputValidations });
  const year = useInput({ initialValue: initialValue[1], inputValidations: yearInputValidations, preventInputValidations });

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear() % 100;
    const currentMonth = date.getMonth() + 1;

    if (isValidLength(month.value) && isValidLength(year.value)) {
      const error = { state: true, message: '유효기간이 만료된 카드입니다.' };
      const initialErrorState = { state: false, message: '' };

      if (currentYear > Number(year.value)) {
        month.setError(error);
        year.setError(error);
        return;
      }

      if (currentYear === Number(year.value) && currentMonth > Number(month.value)) {
        month.setError(error);
        year.setError(error);
        return;
      }

      month.setError(initialErrorState);
      year.setError(initialErrorState);
    }
  }, [month.value, year.value]);

  return { month, year };
};

export default useCardExpirationDate;
