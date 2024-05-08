import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { findCardBrand } from "./utils/findCardBrand";
import { cardNumberValidator } from "./validator";

export interface CardNumberControl {
  value: {
    raw: string;
    formatted: string;
  };
  errorStatus: IErrorStatus;
  cardBrand: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function useCardNumber(): CardNumberControl {
  const { value, setValueWithValidation, validateOnBlur, errorStatus } =
    useInputValidation(cardNumberValidator);

  const cardBrand = findCardBrand(value);
  // const formattedCardNumber = formatCardNumber(cardNumbers, brand);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueWithValidation(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validateOnBlur(e.target.value);
  };

  return {
    value: {
      raw: value,
      formatted: value,
    },
    errorStatus,
    cardBrand,
    onChange,
    onBlur,
  };
}
