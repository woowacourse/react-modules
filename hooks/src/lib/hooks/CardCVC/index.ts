import { INITIAL_CVC_STATE } from "./constants";
import { getCardCVCError } from "./utils";
import useSingleNumberInput from "../../../hooks/useSingleInput";

const useCardCVC = () => {
  return useSingleNumberInput({
    initialValue: INITIAL_CVC_STATE,
    maxLength: 3,
    getErrorFn: getCardCVCError,
  });
};

export default useCardCVC;
