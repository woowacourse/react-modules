type Props = {
  cardNumbers: string;
  type: "Visa" | "MasterCard" | "Diners" | "AMEX" | "UnionPay" | "";
};

const SPLIT_INDEX = Object.freeze({
  AMEX: [
    [0, 4],
    [4, 10],
    [10, 15],
  ],
  Diners: [
    [0, 4],
    [4, 10],
    [10, 14],
  ],
  MasterCard: [
    [0, 4],
    [4, 8],
    [8, 12],
    [12, 16],
  ],
  UnionPay: [
    [0, 4],
    [4, 8],
    [8, 12],
    [12, 16],
  ],
  Visa: [
    [0, 4],
    [4, 8],
    [8, 12],
    [12, 16],
  ],
});

const formatCardNumber = ({ cardNumbers, type }: Props) => {
  const cleanNumber = cardNumbers.replace(/\s+/g, "");

  const splitConfig = type && SPLIT_INDEX[type];

  if (!splitConfig) {
    return cardNumbers;
  }

  const parts = splitConfig.map(([start, end]) =>
    cleanNumber.slice(start, end)
  );
  return parts.join(" ");
};

export default formatCardNumber;
