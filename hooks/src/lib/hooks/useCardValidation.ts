import useCardNumber from "./useCardNumber";
import useStrictCardNumber from "./useStrictCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";

export default function useCardValidation() {
  const card = useCardNumber();
  const strictCard = useStrictCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();

  return { card, cvc, expiry, password, strictCard };
}
