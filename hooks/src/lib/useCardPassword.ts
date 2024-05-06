import useInput, { ValidationType } from "./useInput";
import useValidation from "./useValidation";

const PASSWORD_LENGTH = 2;

const isValidLength = (value: string) => {
  return value.length === PASSWORD_LENGTH;
};

const isNumber = (value: string) => {
  return /^\d*$/.test(value);
};

const useCardPassword = (initialValue = "") => {
  const inputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: `앞 ${PASSWORD_LENGTH}자리의 비밀번호를 입력해주세요.`,
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: "숫자만 입력 가능합니다.",
    },
  ];

  const cardPassword = useInput({ initialValue, inputValidations, preventInputValidations });
  const isCardPasswordValid = useValidation([cardPassword]);

  return { cardPassword, isCardPasswordValid };
};

export default useCardPassword;
