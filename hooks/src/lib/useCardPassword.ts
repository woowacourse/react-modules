import useInput, { ValidationType } from './useInput';

const useCardPassword = (initialValue = '') => {
  const isValidLength = (value: string) => {
    return value.length === 2;
  };

  const isNumber = (value: string) => {
    return /^\d*$/.test(value);
  };

  const inputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: '앞 2자리의 비밀번호를 입력해주세요.',
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: '숫자만 입력 가능합니다.',
    },
  ];

  const cardPassword = useInput({ initialValue, inputValidations, preventInputValidations });

  return { cardPassword };
};

export default useCardPassword;
