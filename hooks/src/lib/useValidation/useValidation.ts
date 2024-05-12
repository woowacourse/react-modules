import { useState } from "react";
import { ValidationType } from "../useInput/useInput";
import { CardBrand } from "../utils/getCardFormat";

const useValidation = () => {
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const validate = (value: string, validations: ValidationType[], cardBrand?: CardBrand | "") => {
    const validationsResult = validations.find(({ validate }) => !validate(value, cardBrand!));

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
