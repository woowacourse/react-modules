import { validateNumericString } from "../../utils/validation";
import { CardNumberType, HookReturnType, ValidInputFuncType } from "../../types";
import useInputValue from "../common/useInputValue";
import { cardParsingRule, MAX_LENGTH } from "../../constants";
import useErrors from "../common/useErrors";
import { useCardType } from "../common/useCardType";
import getParsingValue from "../../utils/getParsingValue";

const useCardNumber = (): HookReturnType<"cardNumber"> => {
  const { state, onChange, isLengthComplete } = useInputValue<CardNumberType>({
    initialState: "",
    maxLength: MAX_LENGTH.CARD_NUMBER,
  });

  const { errors, errorMessage, clearError, changeError, isErrorComplete } = useErrors({
    initialErrorState: { cardNumber: false },
  });

  const handleChange = (value: string) => {
    const clean = value.replace(/ /g, "");
    onChange(clean);
  };

  const validateInput: ValidInputFuncType = (value: string) => {
    const clean = value.replace(/ /g, "");
    const { error, message } = validateNumericString(clean);

    if (error) {
      changeError("cardNumber", message);
    } else {
      clearError("cardNumber");
    }
  };

  const isValid = isLengthComplete && isErrorComplete;
  const cardType = useCardType(state.slice(0, 6));

  const pattern = cardParsingRule(cardType);
  const displayValue = getParsingValue(state, pattern);

  return {
    state: displayValue,
    onChange: handleChange,
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
