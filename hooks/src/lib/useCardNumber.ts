import { ERROR_MESSAGE } from "../constants";
import { useForm } from "../hooks/useForm";
import { CardNumberInput } from "../types/input";

export default function useCardNumber() {
  const {
    value: cardNumber,
    errors: cardNumberErrors,
    register: cardNumberRegister,
    isValid: isCardNumberIsValid,
  } = useForm<CardNumberInput>({
    defaultValues: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    validation: {
      first: {
        required: true,
        length: 4,
        errorMessage: ERROR_MESSAGE.cardNumber,
      },
      second: {
        required: true,
        length: 4,
        errorMessage: ERROR_MESSAGE.cardNumber,
      },
      third: {
        required: true,
        length: 4,
        errorMessage: ERROR_MESSAGE.cardNumber,
      },
      fourth: {
        required: true,
        length: 4,
        errorMessage: ERROR_MESSAGE.cardNumber,
      },
    },
  });

  return {
    cardNumberErrors,
    isCardNumberIsValid,
    cardNumber,
    cardNumberRegister,
  };
}
