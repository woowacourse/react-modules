import { useInputValidation, IErrorStatus } from "../useInputValidation";
import { identifyCardBrand } from "./utils/identifyCardBrand";
import { formatCardNumber } from "./utils/formatCardNumber";
import { cardNumberValidator } from "./validator";
import { CardBrand } from "./constants/cardBrand";

export interface UseCardNumberReturn {
  value: {
    raw: string;
    formatted: string[];
  };
  errorStatus: IErrorStatus;
  cardBrand: CardBrand;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function useCardNumber(): UseCardNumberReturn {
  const { value, setValueWithValidation, validateOnBlur, errorStatus } =
    useInputValidation(cardNumberValidator);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueWithValidation(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validateOnBlur(e.target.value);
  };

  const cardBrand = identifyCardBrand(value);
  const formattedCardNumber = formatCardNumber(value, cardBrand);

  return {
    value: {
      raw: value,
      formatted: formattedCardNumber,
    },
    cardBrand,
    errorStatus,
    onChange,
    onBlur,
  };
}
