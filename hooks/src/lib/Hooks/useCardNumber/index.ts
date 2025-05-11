import { validateNumericString } from "../../utils/validation";
import { CardNumberType, HookReturnType } from "../../types";
import useInputValue from "../common/useInputValue";
import { cardParsingRule, MAX_LENGTH } from "../../constants";
import { useCardType } from "../common/useCardType";
import getParsingValue from "../../utils/getParsingValue";

const useCardNumber = (): HookReturnType => {
  const { state, onChange, isLengthComplete } = useInputValue<CardNumberType>({
    initialState: "",
    maxLength: MAX_LENGTH.CARD_NUMBER,
  });

  const { error, errorMessage } = validateNumericString(state);

  const isValid = isLengthComplete && !error;
  const cardType = useCardType(state.slice(0, 6));

  const pattern = cardParsingRule(cardType);
  const displayValue = getParsingValue(state, pattern);

  return {
    value: displayValue,
    onChange,
    error,
    errorMessage,
    isLengthComplete,
    isErrorComplete: !error,
    isValid,
    cardType,
  };
};

export default useCardNumber;
