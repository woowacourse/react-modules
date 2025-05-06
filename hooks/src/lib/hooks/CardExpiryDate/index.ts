import { INITIAL_EXPIRY_DATE_STATE } from "./constants";
import { getCardExpiryDateError } from "./utils";
import useSingleNumberInput from "../../../hooks/useSingleInput";

const useCardExpiryDate = () => {
  return useSingleNumberInput({
    initialValue: INITIAL_EXPIRY_DATE_STATE,
    maxLength: 4,
    getErrorFn: getCardExpiryDateError,
  });
};

export default useCardExpiryDate;
