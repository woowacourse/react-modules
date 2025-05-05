import { useState } from "react";
import { isNumber } from "../../utils/validation";
import {
  CardNumberType,
  ErrorMessageType,
  HookReturnType,
  ListErrorType,
  SetValueFn,
  ValidInputFuncType,
} from "../../types";
import useErrorCheckComplete from "../common/useErrorCheckComplete";

const KEY_INDEX_MATCH = ["first", "second", "third", "forth"];

const useCardNumber = (): HookReturnType<"cardNumber"> => {
  /** 상태 및 변수 관리 */
  const [cardNumber, setCardNumber] = useState<CardNumberType>({
    first: "",
    second: "",
    third: "",
    forth: "",
  });

  const [errors, setErrors] = useState<ListErrorType>([
    false,
    false,
    false,
    false,
  ]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  /** setter(상태업데이트) */
  const onChange: SetValueFn<CardNumberType[keyof CardNumberType]> = (
    value,
    index
  ) => {
    if (index === undefined) return;

    // setter 상태업데이트
    setCardNumber((prev) => ({
      ...prev,
      [KEY_INDEX_MATCH[index]]: value,
    }));
  };

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
    const { error, message } = isNumber(value);

    setErrors((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const isErrorComplete = useErrorCheckComplete(errors);

  return {
    state: cardNumber,
    onChange,
    errors,
    errorMessage,
    validateInput,
    isErrorComplete,
  };
};

export default useCardNumber;
