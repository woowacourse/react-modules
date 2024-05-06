import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { cardNumberValidator } from "./validator";

interface CardNumberUnitControl {
  value: string;
  errorStatus: IErrorStatus;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function useCardNumber(): CardNumberUnitControl[] {
  const firstUnitControl = useInputValidation(cardNumberValidator);
  const secondUnitControl = useInputValidation(cardNumberValidator);
  const thirdUnitControl = useInputValidation(cardNumberValidator);
  const fourthUnitControl = useInputValidation(cardNumberValidator);

  const cardNumberUnitControls = [
    firstUnitControl,
    secondUnitControl,
    thirdUnitControl,
    fourthUnitControl,
  ];

  const result = cardNumberUnitControls.map(
    ({ value, setValueWithValidation, errorStatus, validateOnBlur }) => {
      return {
        value,
        errorStatus,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setValueWithValidation(e.target.value);
        },
        onBlur: (e: React.FocusEvent<HTMLInputElement>) => validateOnBlur(e.target.value),
      };
    }
  );

  return result;
}
