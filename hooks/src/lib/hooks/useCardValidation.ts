import useCardNumber from "./useCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";

interface UseCardValidationReturn {
  card: ReturnType<typeof useCardNumber>;
  cvc: ReturnType<typeof useCVCNumber>;
  expiry: ReturnType<typeof useExpiryDateNumber>;
  password: ReturnType<typeof usePasswordNumber>;
}

export default function useCardValidation(): UseCardValidationReturn {
  const card = useCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();
  return { card, cvc, expiry, password };
}
