import { isExpirationDate } from "../../utils/validation";
import { HookReturnType, ValidInputFuncType } from "../../types";
import { MAX_LENGTH } from "../../constants";
import useBaseField from "../common/useInputValue";
import useErrors from "../common/useErrors";

const KEY_INDEX_MATCH: ("month" | "year")[] = ["month", "year"];

const useExpirationDate = (): HookReturnType<"expirationDate"> => {
  const { state, onChange, isLengthComplete } = useBaseField({
    initialState: {
      month: "",
      year: "",
    },
    maxLength: MAX_LENGTH.EXPIRATION_DATE,
    keyIndexMap: KEY_INDEX_MATCH,
  });

  const { errors, errorMessage, clearError, changeError, isErrorComplete } = useErrors({
    initialErrorState: { month: false, year: false },
  });

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
    const type = KEY_INDEX_MATCH[index];
    const { error, message } = isExpirationDate(type, value);
    if (error) {
      changeError(type, message);
    } else {
      clearError(type);
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

export default useExpirationDate;
