import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { CVCValidator } from "./validator";

interface UseCVCReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function useCVC(): UseCVCReturn {
  const { value, errorStatus, setValueWithValidation, validateOnBlur } =
    useInputValidation(CVCValidator);

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
