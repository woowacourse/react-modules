import { ERROR_MESSAGE } from '@/constants';
import { useForm } from '@/hooks/useForm';
import { CardPasswordInput } from '@/types/input';

export default function usePassword() {
  const {
    value: password,
    errors: passwordErrors,
    register: passwordRegister,
    isValid: isPasswordIsValid,
  } = useForm<CardPasswordInput>({
    defaultValues: {
      password: '',
    },
    validation: {
      password: {
        required: true,
        length: 2,
        errorMessage: ERROR_MESSAGE.cardPassword,
      },
    },
    inputRegex: {
      password: /^\d{0,2}$/,
    },
  });

  return {
    passwordErrors,
    isPasswordIsValid,
    password,
    passwordRegister,
  };
}
