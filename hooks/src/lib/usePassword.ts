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
  });

  return {
    passwordErrors,
    isPasswordIsValid,
    password,
    passwordRegister,
  };
}
