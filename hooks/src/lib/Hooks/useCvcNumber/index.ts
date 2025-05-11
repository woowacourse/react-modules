import { validateNumericString } from "../../utils/validation";
import { CvcNumberType, HookReturnType } from "../../types";

import useInputValue from "../common/useInputValue";
import { MAX_LENGTH } from "../../constants";

const useCvcNumber = (): HookReturnType => {
  const { state, onChange, isLengthComplete } = useInputValue<CvcNumberType>({
    initialState: "",
    maxLength: MAX_LENGTH.CVC_NUMBER,
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

export default useCvcNumber;
