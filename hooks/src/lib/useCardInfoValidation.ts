import { CardInfo } from "./types/Card";
import useCardCvcValidation from "./useCardCvcValidation";
import useCardExpirationValidation from "./useCardExpirationValidation";
import useCardNumberValidation from "./useCardNumberValidation";
import useCardPasswordValidation from "./useCardPasswordValidation";

export function useCardInfoValidation(cardInfo: CardInfo) {
  const { isCardNumberError } = useCardNumberValidation(cardInfo.number);
  const { isCardExpirationError } = useCardExpirationValidation(
    cardInfo.expiration.month,
    cardInfo.expiration.year
  );
  const { isCvcError } = useCardCvcValidation(cardInfo.cvc);
  const { isPasswordError } = useCardPasswordValidation(cardInfo.passwordFront);

  return (
    isCardNumberError.some((isError) => isError) ||
    isCardExpirationError.some((isError) => isError) ||
    isCvcError ||
    isPasswordError ||
    cardInfo.company === ""
  );
}

export default useCardInfoValidation;
