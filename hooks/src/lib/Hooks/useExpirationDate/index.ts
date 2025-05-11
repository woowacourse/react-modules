import { validateExpirationDate } from "../../utils/validation";
import { ExpirationDateType, HookReturnType } from "../../types";
import { DATE_PARSING_RULE, MAX_LENGTH } from "../../constants";
import useInputValue from "../common/useInputValue";
import getParsingValue from "../../utils/getParsingValue";

const useExpirationDate = (splitter: string = " "): HookReturnType => {
  const { state, onChange, isLengthComplete } = useInputValue<ExpirationDateType>({
    initialState: "",
    maxLength: MAX_LENGTH.EXPIRATION_DATE,
    splitter: splitter,
  });

  const { error, errorMessage } = validateExpirationDate(state);

  const isValid = isLengthComplete && !error;
  const displayValue = getParsingValue(state, DATE_PARSING_RULE, splitter);

  return {
    value: displayValue,
    onChange,
    error,
    errorMessage,
    isLengthComplete,
    isErrorComplete: !error,
    isValid,
  };
};

export default useExpirationDate;
