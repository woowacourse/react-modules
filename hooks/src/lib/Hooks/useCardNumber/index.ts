import { validateNumericString } from "../../utils/validation";
import { CardNumberType, HookReturnType, ValidInputFuncType } from "../../types";
import useInputValue from "../common/useInputValue";
import { MAX_LENGTH } from "../../constants";
import useErrors from "../common/useErrors";

const KEY_INDEX_MATCH = ["first", "second", "third", "forth"];

const useCardNumber = (): HookReturnType<"cardNumber"> => {
  const { state, onChange, isLengthComplete } = useInputValue<CardNumberType>({
    initialState: {
      first: "",
      second: "",
      third: "",
      forth: "",
    },
    maxLength: MAX_LENGTH.CARD_NUMBER,
    keyIndexMap: KEY_INDEX_MATCH,
  });

  const { errors, errorMessage, clearError, changeError, isErrorComplete } = useErrors({
    initialErrorState: { first: false, second: false, third: false, forth: false },
  });

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
    const type = KEY_INDEX_MATCH[index];
    const { error, message } = validateNumericString(value);

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

export default useCardNumber;
