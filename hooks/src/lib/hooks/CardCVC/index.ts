import { INITIAL_CVC_STATE } from "./constants";
import { getCardCVCError } from "./utils";
import useCardSingleInput from "../../../hooks/useCardSingleInput";

const useCardCVC = () => {
  const { inputState, handleInputChange, errorState } = useCardSingleInput({
    initialValue: INITIAL_CVC_STATE,
    maxLength: 3,
    getErrorFn: getCardCVCError,
  });

  return {
    cvcState: inputState,
    handleCVCStateChange: handleInputChange,
    errorState,
  };
};

export default useCardCVC;
