import { validateNumericString } from "../../utils/validation";
import { HookReturnType, ValidInputFuncType } from "../../types";

import useBaseField from "../common/useBaseField";
import { MAX_LENGTH } from "../../constants";

const useCvcNumber = (): HookReturnType<"cvcNumber"> => {
  const { state, errors, errorMessage, onChange, clearError, changeError, isLengthComplete, isErrorComplete, isValid } =
    useBaseField({
      initialState: "",
      maxLength: MAX_LENGTH.CVC_NUMBER,
    });

  const validateInput: ValidInputFuncType = (value: string) => {
    const { error, message } = validateNumericString(value);

    if (error) {
      changeError(message);
    } else {
      clearError();
    }
  };

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
