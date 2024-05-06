import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { cardNumberValidator } from "./validator";

interface CardNumberPartControl {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function useCardNumber(): CardNumberPartControl[] {
  const firstPartControl = useInputValidation(cardNumberValidator);
  const secondPartControl = useInputValidation(cardNumberValidator);
  const thirdPartControl = useInputValidation(cardNumberValidator);
  const fourthPartControl = useInputValidation(cardNumberValidator);

  const cardNumberPartControls = [
    firstPartControl,
    secondPartControl,
    thirdPartControl,
    fourthPartControl,
  ];

  const result = cardNumberPartControls.map(
    ({ value, setValueWithValidation, errorStatus, validateOnBlur }) => {
      return {
        value,
        errorStatus,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setValueWithValidation(e.target.value),
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => validateOnBlur(e.target.value),
      };
    }
  );

  return result;
}
