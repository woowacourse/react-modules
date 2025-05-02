import useCardNumber from "./useCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";
import useCardNetwork from "./useCardNetwork";

interface UseCardValidationReturn {
  card: ReturnType<typeof useCardNumber>;
  cvc: ReturnType<typeof useCVCNumber>;
  expiry: ReturnType<typeof useExpiryDateNumber>;
  password: ReturnType<typeof usePasswordNumber>;
  network: ReturnType<typeof useCardNetwork>;
}

export default function useCardValidation(): UseCardValidationReturn {
  const card = useCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();
  const network = useCardNetwork();

  // 각 훅 결과에서 필요한 정보를 조합합니다
  const combinedNetwork = {
    ...network,
    cardNetwork: network.getCardNetwork(card.cardNumber),
  };

  return { card, cvc, expiry, password, network: combinedNetwork };
}
