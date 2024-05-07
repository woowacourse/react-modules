import { CardBrandName } from "@/data/cardCompanyNumbersInfo";

export const decideCardBrandByFirstDigits = (
  slicedValue: string
): CardBrandName | null => {
  if (slicedValue[0] === "4") {
    return "VISA";
  }
  return null;
};

//TODO: from, to 사이에 있는 유틸 만들기
export const decideCardBrandByNextTwoDigits = (
  value: string
): CardBrandName | null => {
  const slicedValue = value.slice(0, 2);
  if (+slicedValue >= 51 && +slicedValue <= 55) {
    return "MASTER_CARD";
  }
  if (slicedValue === "34" || slicedValue === "37") {
    return "AMEX";
  }
  if (slicedValue === "36") {
    return "DINERS";
  }
  return null;
};

export const decideCardBrandByNextFourDigits = (
  value: string
): CardBrandName | null => {
  const slicedValue = value.slice(0, 2);
  const secondSlicedValue = value.slice(2, 6);
  if (slicedValue === "62" && secondSlicedValue.startsWith("2")) {
    if (+secondSlicedValue >= 2126 && +secondSlicedValue <= 2925) {
      return "UNION_PAY";
    }
  }
  return null;
};
