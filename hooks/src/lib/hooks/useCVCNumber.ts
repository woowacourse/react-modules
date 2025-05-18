import useCardInfo from "./useCardInfo";
import useError from "./useError";
import { isValidLength, isValidNumber } from "../util";

export default function useCVCNumber({
  initCVCNumber,
  initCVCNumberError,
}: {
  initCVCNumber: Record<string, string>;
  initCVCNumberError: Record<string, string>;
}) {
  const CVCNumber = useCardInfo({
    initValues: initCVCNumber,
    maxLength: 3,
  });

  const CVCError = useError({
    initError: initCVCNumberError,
    getValidationFns: getCVCNumberValidationFns,
  });

  return {
    CVCNumber,
    CVCError,
  };
}

const ERROR_MESSAGE = {
  LENGTH: "3자리만 입력 가능합니다.",
  NUMBER: "숫자만 입력 가능합니다.",
};

function getCVCNumberValidationFns(maxLength: number, CVCNumber: string) {
  return [
    {
      condition: () => !isValidLength(CVCNumber, maxLength),
      errorMsg: ERROR_MESSAGE.LENGTH,
    },
    {
      condition: () => !isValidNumber(CVCNumber),
      errorMsg: ERROR_MESSAGE.NUMBER,
    },
  ];
}
