import useInput, { ValidationType } from './useInput';

const useCardOwner = (initialValue = '') => {
  const isEnglish = (value: string) => {
    return /^[a-zA-Z ]*$/.test(value);
  };

  const preventInputValidations: ValidationType[] = [
    {
      validate: isEnglish,
      message: '영어만 입력 가능합니다.',
    },
  ];

  const inputValidations: ValidationType[] = [
    {
      validate: (value: string) => value !== '',
      message: '소유자 이름을 영어로 입력해주세요.',
    },
  ];

  const cardOwner = useInput({ initialValue, inputValidations, preventInputValidations });

  return { cardOwner };
};

export default useCardOwner;
