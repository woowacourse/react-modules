import { INITIAL_CARD_PASSWORD } from "./constants";
import { getCardPasswordError } from "./utils";
import useSingleNumberInput from "../../../hooks/useSingleInput";

const useCardPassword = () => {
  return useSingleNumberInput({
    initialValue: INITIAL_CARD_PASSWORD,
    maxLength: 2,
    getErrorFn: getCardPasswordError,
  });
};

export default useCardPassword;
