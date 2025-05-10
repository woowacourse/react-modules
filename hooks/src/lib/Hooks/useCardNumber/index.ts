import { validateNumericString } from "../../utils/validation";
import { CardNumberType, HookReturnType, ValidInputFuncType } from "../../types";
import useInputValue from "../common/useInputValue";
import { MAX_LENGTH } from "../../constants";
import useErrors from "../common/useErrors";
import { useCardType } from "../common/useCardType";

const useCardNumber = (): HookReturnType<"cardNumber"> => {
  const { state, onChange, isLengthComplete } = useInputValue<CardNumberType>({
    initialState: "",
    maxLength: MAX_LENGTH.CARD_NUMBER,
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
  const cardType = useCardType(state.slice(0, 6));

  return {
    state,
    onChange,
    errors,
    errorMessage,
    validateInput,
    isLengthComplete,
    isErrorComplete,
    isValid,
    cardType,
  };
};

export default useCardNumber;
