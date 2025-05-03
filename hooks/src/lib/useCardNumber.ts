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
        errorMessage: "카드 번호는 4자리의 숫자로 입력해주세요.",
      },
      second: {
        required: true,
        length: 4,
        errorMessage: "카드 번호는 4자리의 숫자로 입력해주세요.",
      },
      third: {
        required: true,
        length: 4,
        errorMessage: "카드 번호는 4자리의 숫자로 입력해주세요.",
      },
      fourth: {
        required: true,
        length: 4,
        errorMessage: "카드 번호는 4자리의 숫자로 입력해주세요.",
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
