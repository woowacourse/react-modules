import useCardInfo from "./useCardInfo";
import useError from "./useError";
import { isValidLength, isValidNumber } from "../util";

export default function usePassword({
  initPassword,
  initPasswordError,
}: {
  initPassword: Record<string, string>;
  initPasswordError: Record<string, string>;
}) {
  const password = useCardInfo({
    initValues: initPassword,
    maxLength: 3,
  });

  const passwordError = useError({
    initError: initPasswordError,
    getValidationFns: getPasswordValidationFns,
  });

  return {
    password,
    passwordError,
  };
}

const ERROR_MESSAGE = {
  LENGTH: "2자리만 입력 가능합니다.",
  NUMBER: "숫자만 입력 가능합니다.",
};

function getPasswordValidationFns(maxLength: number, password: string) {
  return [
    {
      condition: () => !isValidLength(password, maxLength),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(password),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
  ];
}
