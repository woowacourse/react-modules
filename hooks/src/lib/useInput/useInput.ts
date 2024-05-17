import { useRef, useState } from "react";
import useValidation from "../useValidation/useValidation";
import { CardBrand } from "../utils/getCardBrand";

export interface ValidationType {
  validate: (value: string, cardBrand: CardBrand | "") => boolean;
  message: string | ((cardBrand: CardBrand | "") => string);
}
interface UseInputProps {
  initialValue: string;
  inputValidations: ValidationType[];
  preventInputValidations?: ValidationType[];
  cardBrand?: CardBrand | "";
}

const useInput = ({
  initialValue,
  inputValidations,
  preventInputValidations,
  cardBrand,
}: UseInputProps) => {
  const [value, setValue] = useState(initialValue);
  const { error, setError, validate } = useValidation();
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, maxLength?: number) => {
    if (preventInputValidations && !validate(e.target.value, preventInputValidations, cardBrand)) {
      return;
    }

    if (inputValidations) {
      validate(e.target.value, inputValidations, cardBrand);
    }

    setValue(e.target.value);

    if (maxLength && e.target.value.length === maxLength) {
      const nextSibling = ref.current?.nextSibling as HTMLInputElement;

      if (nextSibling) nextSibling.focus();
    }
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputValidations) {
      validate(e.target.value, inputValidations, cardBrand);
    }
  };

  const changeValue = (value: string) => {
    setValue(value);
  };

  return {
    value,
    changeValue,
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
    error,
    setError,
    ref,
  };
};

export default useInput;
