import { ERROR_MESSAGE } from "../constants";
import { useForm } from "../hooks/useForm";
import { CardCVCNumberInput } from "../types/input";

export default function useCvcNumber() {
  const {
    value: cvcNumber,
    errors: cvcNumberErrors,
    register: cvcNumberRegister,
    isValid: isCvcNumberIsValid,
  } = useForm<CardCVCNumberInput>({
    defaultValues: {
      cvc: "",
    },
    validation: {
      cvc: {
        required: true,
        length: 3,
        errorMessage: ERROR_MESSAGE.cardCVCNumber,
      },
    },
  });

  return {
    cvcNumberErrors,
    isCvcNumberIsValid,
    cvcNumber,
    cvcNumberRegister,
  };
}
