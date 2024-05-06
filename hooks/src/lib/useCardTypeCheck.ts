import { useState } from "react";
import { CARD_TYPE } from "./constants";

interface CheckResult {
  cardType: "Visa" | "Mastercard" | "none";
}

const useCardTypeCheck = () => {
  const [checkResult, setCheckResult] = useState<CheckResult>({
    cardType: "none",
  });

  const handleCardTypeChange = (value: string) => {
    if (value.charAt(0) === CARD_TYPE.visaNumber) {
      setCheckResult({ cardType: "Visa" });
      return;
    }

    if (
      parseInt(value.substring(0, 2), 10) >= CARD_TYPE.minMastercardNumber &&
      parseInt(value.substring(0, 2), 10) <= CARD_TYPE.maxMastercardNumber
    ) {
      setCheckResult({ cardType: "Mastercard" });
      return;
    }
    setCheckResult({ cardType: "none" });
  };

  return { checkResult, handleCardTypeChange };
};

export default useCardTypeCheck;
