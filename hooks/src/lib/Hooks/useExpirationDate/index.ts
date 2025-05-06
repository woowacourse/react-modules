import { isExpirationDate } from "../../utils/validation";
import { HookReturnType, ValidInputFuncType } from "../../types";
import { MAX_LENGTH } from "../../constants";
import useBaseField from "../common/useBaseField";

const KEY_INDEX_MATCH = ["month", "year"];

const useExpirationDate = (): HookReturnType<"expirationDate"> => {
  const { state, errors, errorMessage, onChange, clearError, changeError, isLengthComplete, isErrorComplete, isValid } =
    useBaseField({
      initialState: {
        month: "",
        year: "",
      },
      maxLength: MAX_LENGTH.EXPIRATION_DATE,
      keyIndexMap: KEY_INDEX_MATCH,
    });

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
    const inputType = index === 0 ? "month" : "year";
    const { error, message } = isExpirationDate(inputType, value);
    if (error) {
      changeError(message, index);
    } else {
      clearError(index);
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

export default useExpirationDate;
