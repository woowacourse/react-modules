import useCardNumber from "./useCardNumber";
import useStrictCardNumber from "./useStrictCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";
import useCardNetwork from "./useCardNetwork";
import useCardFormat from "./useCardFormat";
import type { UseCardValidationOptions } from "./useCardFormat";

export default function useCardValidation(
  options: UseCardValidationOptions = {}
) {
  const { format: formatOptions = {} } = options;
  const { splitter = " " } = formatOptions;

  const card = useCardNumber();
  const strictCard = useStrictCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();
  const network = useCardNetwork();
  const format = useCardFormat(splitter);

  return { card, cvc, expiry, password, network, strictCard, format };
}
