import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { validateCardNumber } from "./validator/validateCardInput";
import { getFirstErrorMessage } from "./validator/getFirstErrorMessage";

type CardBrand =
  | "VISA"
  | "MASTERCARD"
  | "AMEX"
  | "DINERS"
  | "UNIONPAY"
  | "UNKNOWN";

function detectCardBrand(cardNumber: string): CardBrand {
  const noSpace = cardNumber.replace(/\s/g, "");

  if (/^3[47]/.test(noSpace)) return "AMEX";
  if (/^36/.test(noSpace)) return "DINERS";
  if (/^4/.test(noSpace)) return "VISA";
  if (/^5[1-5]/.test(noSpace)) return "MASTERCARD";
  if (
    /^622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])/.test(
      noSpace
    ) ||
    /^624|625|626/.test(noSpace) ||
    /^628[2-8]/.test(noSpace)
  )
    return "UNIONPAY";

  return "UNKNOWN";
}

const CARD_NUMBER_BLOCKS: Record<CardBrand, number[]> = {
  VISA: [4, 4, 4, 4],
  MASTERCARD: [4, 4, 4, 4],
  AMEX: [4, 6, 5],
  DINERS: [4, 6, 4],
  UNIONPAY: [4, 4, 4, 4],
  UNKNOWN: [4, 4, 4, 4],
};

export function useCardNumbersInput() {
  const [cardNumbersInfo, setCardNumbersInfo] = useState([
    { value: "", errorMessage: "" },
    { value: "", errorMessage: "" },
    { value: "", errorMessage: "" },
    { value: "", errorMessage: "" },
  ]);
  const [cardBrand, setCardBrand] = useState<CardBrand>("UNKNOWN");

  useEffect(() => {
    const blockCount = CARD_NUMBER_BLOCKS[cardBrand].length;

    setCardNumbersInfo((prev) => {
      const next = [...prev.slice(0, blockCount)];
      while (next.length < blockCount)
        next.push({ value: "", errorMessage: "" });
      return next;
    });
  }, [cardBrand]);

  const onChangeHandler = (index: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const errorResults = validateCardNumber(value);
      const errorMessage = getFirstErrorMessage(errorResults, "NUMBER");

      const next = cardNumbersInfo.map((prev, i) =>
        i === index ? { value, errorMessage } : prev
      );

      setCardNumbersInfo(next);

      const fullNumber = next.map((info) => info.value).join("");
      const detectedBrand = detectCardBrand(fullNumber);
      if (detectedBrand !== cardBrand) {
        setCardBrand(detectedBrand);
      }
    };
  };

  return {
    cardNumbersInfo,
    onChangeHandler,
    cardBrand,
    cardBlocks: CARD_NUMBER_BLOCKS[cardBrand],
  };
}
