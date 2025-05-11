import { validateExpirationDate } from "../../utils/validation";
import { ExpirationDateType, HookReturnType } from "../../types";
import { MAX_LENGTH } from "../../constants";
import useInputValue from "../common/useInputValue";

const useExpirationDate = (): HookReturnType => {
  const { state, onChange, isLengthComplete } = useInputValue<ExpirationDateType>({
    initialState: "",
    maxLength: MAX_LENGTH.EXPIRATION_DATE,
  });

  const { error, errorMessage } = validateExpirationDate(state);

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

export default useExpirationDate;
