import { ERROR_MESSAGE } from "../constants";
import { useForm } from "../hooks/useForm";
import { CardPasswordInput } from "../types/input";

export default function usePassword() {
  const {
    value: password,
    errors: passwordErrors,
    register: passwordRegister,
    isValid: isPasswordIsValid,
  } = useForm<CardPasswordInput>({
    defaultValues: {
      password: "",
    },
    validation: {
      password: {
        required: true,
        length: 2,
        errorMessage: ERROR_MESSAGE.cardPassword,
      },
    },
  });

  return {
    passwordErrors,
    isPasswordIsValid,
    password,
    passwordRegister,
  };
}
