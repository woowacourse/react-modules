import { validateNumericString } from "../../utils/validation";
import { CardNumberType, HookReturnType, ValidInputFuncType } from "../../types";
import useInputValue from "../common/useInputValue";
import { MAX_LENGTH } from "../../constants";
import useErrors from "../common/useErrors";

const KEY_INDEX_MATCH = ["first", "second", "third", "fourth"];

const useCardNumber = (): HookReturnType<"cardNumber"> => {
  const { state, onChange, isLengthComplete } = useInputValue<CardNumberType>({
    initialState: "",
    maxLength: MAX_LENGTH.CARD_NUMBER,
    keyIndexMap: KEY_INDEX_MATCH,
  });

  const { errors, errorMessage, clearError, changeError, isErrorComplete } = useErrors({
    initialErrorState: { cardNumber: false },
  });

  const validateInput: ValidInputFuncType = (value: string) => {
    const { error, message } = validateNumericString(value);

    if (error) {
      changeError("cardNumber", message);
    } else {
      clearError("cardNumber");
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
