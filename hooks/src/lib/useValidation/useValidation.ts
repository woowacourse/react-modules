import { useState } from "react";
import { ValidationType } from "../useInput/useInput";
import { CardBrand } from "../utils/getCardBrand";

export const WHITESPACE_REGEX = /\s/g; // 공백을 찾는 정규 표현식

const useValidation = () => {
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const validate = (value: string, validations: ValidationType[], cardBrand?: CardBrand | "") => {
    const trimmedValue = value.replace(WHITESPACE_REGEX, "");
    const validationsResult = validations.find(
      ({ validate }) => !validate(trimmedValue, cardBrand!)
    );

    if (validationsResult) {
      setError({
        state: true,
        message:
          typeof validationsResult.message === "function"
            ? validationsResult.message(cardBrand!)
            : validationsResult.message,
      });
      return false;
    }

    setError({ state: false, message: "" });
    return true;
  };

  return { error, setError, validate };
};

export default useValidation;
