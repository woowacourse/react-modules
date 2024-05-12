import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { passwordPrefixValidator } from "./validator";

export interface UsePasswordPrefixReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function usePasswordPrefix(): UsePasswordPrefixReturn {
  const { value, errorStatus, setValueWithValidation, validateOnBlur } =
    useInputValidation(passwordPrefixValidator);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueWithValidation(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => validateOnBlur(e.target.value);

  return {
    value,
    errorStatus,
    onChange,
    onBlur,
  };
}
