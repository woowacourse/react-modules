import CardNextWork from "../../../types/CardNextWork";

const calculateNetwork = (
  value: string
): { name: CardNextWork; length: number } => {
  let calculatedValue: number;

  calculatedValue = parseInt(value[0], 10);
  if (calculatedValue === 4) {
    return { name: "VISA", length: 16 };
  }

  calculatedValue = parseInt(value.slice(0, 2), 10);
  if (51 <= calculatedValue && calculatedValue < 55) {
    return { name: "MASTER_CARD", length: 16 };
  }

  if (34 === calculatedValue || calculatedValue === 37) {
    return { name: "AMEX", length: 15 };
  }

  if (36 === calculatedValue) {
    return { name: "DINERS", length: 14 };
  }

  calculatedValue = parseInt(value.slice(0, 6), 10);
  if (622126 <= calculatedValue && calculatedValue < 622925)
    return { name: "UNION_PAY", length: 16 };

  return { name: "NOTHING", length: 16 };
};

export default calculateNetwork;
