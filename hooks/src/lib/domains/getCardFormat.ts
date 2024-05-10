import { CardBrand } from "./getCardBrand";

const cardFormats: Record<CardBrand | "none", number[]> = {
  visa: [4, 4, 4, 4],
  mastercard: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  union: [4, 4, 4, 4],
  none: [],
};

const formatter = (value: string, pose: number[]) => {
  const prefixSum = getPrefixSum(pose);
  return value
    .split("")
    .map((v, i) => (prefixSum.includes(i + 1) ? v + " " : v))
    .join("")
    .trim();
};

const getPrefixSum = (pose: number[]) => {
  const prefixSum = Array(pose.length).fill(0);
  prefixSum[0] = pose[0];
  for (let i = 1; i < pose.length; i++) {
    prefixSum[i] = pose[i] + prefixSum[i - 1];
  }

  return prefixSum;
};

const getCardFormat = (value: string, brand: CardBrand | "none") => formatter(value, cardFormats[brand]);

export default getCardFormat;
