import { CardBrandInfo, cardBrandsInfo } from "@/data/cardCompanyNumbersInfo";

export const decideCardBrandByFirstDigits = (
  slicedValue: string
): CardBrandInfo | null => {
  if (slicedValue[0] === "4") {
    return cardBrandsInfo["VISA"];
  }
  return null;
};

//TODO: from, to 사이에 있는 유틸 만들기
export const decideCardBrandByNextTwoDigits = (
  value: string
): CardBrandInfo | null => {
  const slicedValue = value.slice(0, 2);
  if (+slicedValue >= 51 && +slicedValue <= 55) {
    return cardBrandsInfo["MASTER_CARD"];
  }
  if (slicedValue === "34" || slicedValue === "37") {
    return cardBrandsInfo["AMEX"];
  }
  if (slicedValue === "36") {
    return cardBrandsInfo["DINERS"];
  }
  return null;
};

export const decideCardBrandByNextFourDigits = (
  value: string
): CardBrandInfo | null => {
  const slicedValue = value.slice(0, 2);
  const secondSlicedValue = value.slice(2, 6);
  if (slicedValue === "62" && secondSlicedValue.startsWith("2")) {
    if (+secondSlicedValue >= 2126 && +secondSlicedValue <= 2925) {
      return cardBrandsInfo["UNION_PAY"];
    }
  }
  return null;
};
