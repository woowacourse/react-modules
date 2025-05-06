import { validateNumericString } from "../../utils/validation";
import { CardNumberType, HookReturnType, ValidInputFuncType } from "../../types";
import useBaseField from "../common/useBaseField";
import { MAX_LENGTH } from "../../constants";

const KEY_INDEX_MATCH = ["first", "second", "third", "forth"];

const useCardNumber = (): HookReturnType<"cardNumber"> => {
  const { state, errors, errorMessage, onChange, clearError, changeError, isLengthComplete, isErrorComplete, isValid } =
    useBaseField<CardNumberType>({
      initialState: {
        first: "",
        second: "",
        third: "",
        forth: "",
      },
      maxLength: MAX_LENGTH.CARD_NUMBER,
      keyIndexMap: KEY_INDEX_MATCH,
    });

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
    const { error, message } = validateNumericString(value);

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

export default useCardNumber;
