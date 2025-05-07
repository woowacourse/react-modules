import { validateNumericString } from "../../utils/validation";
import { HookReturnType, ValidInputFuncType } from "../../types";

import useInputValue from "../common/useInputValue";
import { MAX_LENGTH } from "../../constants";
import useErrors from "../common/useErrors";

const useCvcNumber = (): HookReturnType<"cvcNumber"> => {
  const { state, onChange, isLengthComplete } = useInputValue({
    initialState: "",
    maxLength: MAX_LENGTH.CVC_NUMBER,
  });

  const { errors, errorMessage, clearError, changeError, isErrorComplete } = useErrors({
    initialErrorState: { cvc: false },
  });

  const validateInput: ValidInputFuncType = (value: string) => {
    const { error, message } = validateNumericString(value);

    if (error) {
      changeError("cvc", message);
    } else {
      clearError("cvc");
    }
  };

  const isValid = isLengthComplete && isErrorComplete;

  return {
    state,
    onChange,
    errors,
    errorMessage,
    validateInput,
    isLengthComplete,
    isErrorComplete,
    isValid,
  };
};

export default useCvcNumber;
