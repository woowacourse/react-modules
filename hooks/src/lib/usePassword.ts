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
        errorMessage:
          ERROR_MESSAGE.cardPassword?.length || "비밀번호는 2자여야 합니다.",
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
