import useCardNumber from "./useCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";
import useCardNetwork from "./useCardNetwork";
import useStrictCardNumber from "./useStrictCardNumber";

interface UseCardValidationReturn {
  card: ReturnType<typeof useCardNumber>;
  cvc: ReturnType<typeof useCVCNumber>;
  expiry: ReturnType<typeof useExpiryDateNumber>;
  password: ReturnType<typeof usePasswordNumber>;
  network: ReturnType<typeof useCardNetwork>;
  strictCard: ReturnType<typeof useStrictCardNumber>;
}

export default function useCardValidation(): UseCardValidationReturn {
  const card = useCardNumber();
  const strictCard = useStrictCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();
  const network = useCardNetwork();

  return { card, cvc, expiry, password, network, strictCard };
}
