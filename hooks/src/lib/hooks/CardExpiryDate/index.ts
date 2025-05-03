import { INITIAL_EXPIRY_DATE_STATE } from "./constants";
import { validateCardExpiryDate } from "./utils";
import useCardSingleInput from "../../../hooks/useCardSingleInput";

const useCardExpiryDate = () => {
  const { inputState, handleInputChange, errorState } = useCardSingleInput({
    initialValue: INITIAL_EXPIRY_DATE_STATE,
    maxLength: 4,
    validateFn: validateCardExpiryDate,
  });

  return {
    expiryDate: inputState,
    handleExpiryChange: handleInputChange,
    errorState,
  };
};

export default useCardExpiryDate;
