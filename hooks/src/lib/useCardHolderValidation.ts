import { useRef } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  holder: string;
};

const useCardHolderValidation = ({ holder }: Props) => {
  const ref = useRef({ isValid: false, errorMessage: "" });

  if (!validator.isValidEmptyValue(holder)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isEnglish(holder)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.ONLY_ENGLISH,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidLengthRange({ value: holder, maxLength: 21 })) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.OUT_OF_RANGE_HOLDER,
    };
    return { validationResult: ref.current };
  }

  ref.current = {
    isValid: true,
    errorMessage: "",
  };

  return { validationResult: ref.current };
};

export default useCardHolderValidation;
