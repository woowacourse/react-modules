import { INITIAL_CARD_PASSWORD } from "./constants";
import { validateCardPassword } from "./utils";
import useCardSingleInput from "../../../hooks/useCardSingleInput";

const useCardPassword = () => {
  const { inputState, handleInputChange, errorState } = useCardSingleInput({
    initialValue: INITIAL_CARD_PASSWORD,
    maxLength: 2,
    validateFn: validateCardPassword,
  });

  return {
    cardPassword: inputState,
    handleCardPasswordChange: handleInputChange,
    errorState,
  };
};

export default useCardPassword;
