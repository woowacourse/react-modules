import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { cardholderNameValidator } from "./validator";

export interface UseCardholderNameReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function useCardholderName(): UseCardholderNameReturn {
  const { value, errorStatus, setValueWithValidation, validateOnBlur } =
    useInputValidation(cardholderNameValidator);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueWithValidation(e.target.value.toUpperCase());
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => validateOnBlur(e.target.value);

  return {
    value,
    errorStatus,
    onChange,
    onBlur,
  };
}
