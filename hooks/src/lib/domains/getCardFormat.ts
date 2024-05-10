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
    .map((v, i) => (prefixSum.includes(i) ? " " + v : v))
    .join("");
};

const getPrefixSum = (pose: number[]) => {
  return pose.reduce((result, cur) => {
    const lastNumber = result[result.length - 1] ?? 0;
    result.push(lastNumber + cur);
    return result;
  }, [] as number[]);
};

const getCardFormat = (value: string, brand: CardBrand | "none") => formatter(value, cardFormats[brand]);

export default getCardFormat;
