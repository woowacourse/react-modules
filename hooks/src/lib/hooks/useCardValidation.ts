import useCardNumber from "./useCardNumber";
import useStrictCardNumber from "./useStrictCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";
export interface UseCardValidationReturn {
  card: ReturnType<typeof useCardNumber>;
  strictCard: ReturnType<typeof useStrictCardNumber>;
  cvc: ReturnType<typeof useCVCNumber>;
  expiry: ReturnType<typeof useExpiryDateNumber>;
  password: ReturnType<typeof usePasswordNumber>;
}

export default function useCardValidation(): UseCardValidationReturn {
  const card = useCardNumber();
  const strictCard = useStrictCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();

  return { card, strictCard, cvc, expiry, password };
}
