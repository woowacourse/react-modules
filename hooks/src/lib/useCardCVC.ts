import useInput, { ValidationType } from './useInput';

const CVC_LENGTH = 3;

const useCardCVC = (initialValue = '') => {
  const isValidLength = (value: string) => {
    return value.length === CVC_LENGTH;
  };

  const isNumber = (value: string) => {
    return /^\d*$/.test(value);
  };

  const inputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: `${CVC_LENGTH}자리의 CVC번호를 입력해주세요.`,
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: '숫자만 입력 가능합니다.',
    },
  ];

  const cardCVC = useInput({ initialValue, inputValidations, preventInputValidations });

  return { cardCVC };
};

export default useCardCVC;
