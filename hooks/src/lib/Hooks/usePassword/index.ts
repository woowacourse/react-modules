import { validateNumericString } from "../../utils/validation";
import { HookReturnType, ValidInputFuncType } from "../../types";
import { MAX_LENGTH } from "../../constants";
import useInputValue from "../common/useInputValue";
import useErrors from "../common/useErrors";

const usePassword = (): HookReturnType<"password"> => {
  const { state, onChange, isLengthComplete } = useInputValue({
    initialState: "",
    maxLength: MAX_LENGTH.PASSWORD,
  });

  const { errors, errorMessage, clearError, changeError, isErrorComplete } = useErrors({
    initialErrorState: { password: false },
  });
  const validateInput: ValidInputFuncType = (value: string) => {
    const { error, message } = validateNumericString(value);

    if (error) {
      changeError("password", message);
    } else {
      clearError("password");
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

export default usePassword;
