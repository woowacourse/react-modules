import { useState } from "react";
import { ValidationType } from "./useInput";

const useValidation = () => {
  const [error, setError] = useState({
    state: false,
    message: "",
  });

  const validate = (value: string, validations: ValidationType[]) => {
    const validationsResult = validations.find(({ validate }) => !validate(value));

    if (validationsResult) {
      setError({ state: true, message: validationsResult.message });
      return false;
    }

    setError({ state: false, message: "" });
    return true;
  };

  return { error, setError, validate };
};

export default useValidation;
