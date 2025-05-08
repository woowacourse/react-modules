import useCardNumber from "./useCardNumber";
import useStrictCardNumber from "./useStrictCardNumber";
import useCVCNumber from "./useCVCNumber";
import useExpiryDateNumber from "./useExpiryDateNumber";
import usePasswordNumber from "./usePasswordNumber";
import useCardNetwork from "./useCardNetwork";
import useCardFormat from "./useCardFormat";
import { UseCardFormatOptions } from "./useCardFormat";

interface UseCardValidationOptions {
  formatOptions?: UseCardFormatOptions;
}

export default function useCardValidation(
  option: UseCardValidationOptions = {
    formatOptions: { placeholderChar: "X", splitter: " " },
  }
) {
  const { formatOptions } = option;
  const { splitter, placeholderChar } = formatOptions || {
    splitter: " ",
    placeholderChar: "X",
  };

  const card = useCardNumber();
  const strictCard = useStrictCardNumber();
  const cvc = useCVCNumber();
  const expiry = useExpiryDateNumber();
  const password = usePasswordNumber();
  const network = useCardNetwork();
  const format = useCardFormat({ splitter, placeholderChar });

  return { card, cvc, expiry, password, network, strictCard, format };
}
