import useCardNumber from "./useCardNumber";
import useCVCNumber from "./useCVCNumber";

export default function useCardValidation() {
  const card = useCardNumber();
  const cvc = useCVCNumber();
  return { card, cvc };
}
