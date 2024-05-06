import { useState } from "react";
import usePasswordValidation from "./validation/useCardPasswordValidation";

type PasswordName = "password";

const useCardPasswordInput = () => {
  const { passwordValidation, isPasswordValid } = usePasswordValidation();

  const [password, setPassword] = useState({
    value: {
      password: "",
    },
    ...passwordValidation,
  });

  const handlePasswordChange = (value: string, name: PasswordName) => {
    if (isPasswordValid(value, name)) return;
    setPassword({
      errorMessage: { ...password.value, [name]: "" },
      isError: { ...password.isError, [name]: false },
      value: { ...password.value, [name]: value },
    });
  };

  return { password, handlePasswordChange };
};

export default useCardPasswordInput;
