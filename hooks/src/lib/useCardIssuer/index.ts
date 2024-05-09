import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { cardIssuerValidator } from "./validator";

interface UseCardIssuerReturn {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

export function useCardIssuer(): UseCardIssuerReturn {
  const { value, errorStatus, setValueWithValidation } = useInputValidation(cardIssuerValidator);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setValueWithValidation(e.target.value);
  };

  return { value, errorStatus, onChange };
}
