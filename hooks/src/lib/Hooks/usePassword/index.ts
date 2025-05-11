import { validateNumericString } from "../../utils/validation";
import { HookReturnType, PasswordType } from "../../types";
import { MAX_LENGTH } from "../../constants";
import useInputValue from "../common/useInputValue";

const usePassword = (): HookReturnType => {
  const { state, onChange, isLengthComplete } = useInputValue<PasswordType>({
    initialState: "",
    maxLength: MAX_LENGTH.PASSWORD,
  });

  const { error, errorMessage } = validateNumericString(state);
  const isValid = isLengthComplete && !error;

  return {
    value: state,
    onChange,
    error,
    errorMessage,
    isLengthComplete,
    isErrorComplete: !error,
    isValid,
  };
};

export default usePassword;
