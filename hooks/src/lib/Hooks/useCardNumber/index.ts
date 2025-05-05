import { useState } from "react";
import { validateNumericString } from "../../utils/validation";
import {
  CardNumberType,
  ErrorMessageType,
  HookReturnType,
  ListErrorType,
  SetValueFn,
  ValidInputFuncType,
} from "../../types";
import useCheckErrorComplete from "../common/useCheckErrorComplete";
import useCheckLengthComplete from "../common/useCheckLengthComplete";
import { MAX_LENGTH } from "../../constants";

const KEY_INDEX_MATCH = ["first", "second", "third", "forth"];

const useCardNumber = (): HookReturnType<"cardNumber"> => {
  /** 상태 및 변수 관리 */
  const [cardNumber, setCardNumber] = useState<CardNumberType>({
    first: "",
    second: "",
    third: "",
    forth: "",
  });

  const [errors, setErrors] = useState<ListErrorType>([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  /** setter(상태업데이트) */
  const onChange: SetValueFn<CardNumberType[keyof CardNumberType]> = (value, index) => {
    if (index === undefined) return;

    // setter 상태업데이트
    setCardNumber((prev) => ({
      ...prev,
      [KEY_INDEX_MATCH[index]]: value,
    }));
  };

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
    const { error, message } = validateNumericString(value);

    setErrors((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const isLengthComplete = useCheckLengthComplete(cardNumber, MAX_LENGTH.CARD_NUMBER);
  const isErrorComplete = useCheckErrorComplete(errors);
  const isValid = isLengthComplete && isErrorComplete;

  return {
    state: cardNumber,
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
