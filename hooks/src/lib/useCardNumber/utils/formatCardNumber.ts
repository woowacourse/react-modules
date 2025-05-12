export const formatCardNumber = (
  cardNumber: { first: string; second: string; third: string; fourth: string },
  cardType
): string => {
  const { first, second, third, fourth } = cardNumber;
  const cardNumberStr = first + second + third + fourth;

  switch (cardType) {
    case "UnionPay":
    case "Visa":
    case "MasterCard":
      return [
        cardNumberStr.slice(0, 4),
        cardNumberStr.slice(4, 8),
        cardNumberStr.slice(8, 12),
        cardNumberStr.slice(12, 16),
      ]
        .filter(Boolean)
        .join(" ");

    case "Diners":
      return [
        cardNumberStr.slice(0, 4),
        cardNumberStr.slice(4, 10),
        cardNumberStr.slice(10, 14),
      ]
        .filter(Boolean)
        .join(" ");

    case "AMEX":
      return [
        cardNumberStr.slice(0, 4),
        cardNumberStr.slice(4, 10),
        cardNumberStr.slice(10, 15),
      ]
        .filter(Boolean)
        .join(" ");

    default:
      return [
        cardNumberStr.slice(0, 4),
        cardNumberStr.slice(4, 8),
        cardNumberStr.slice(8, 12),
        cardNumberStr.slice(12, 16),
      ]
        .filter(Boolean)
        .join(" ");
  }
};

export const splitCardNumber = (
  formattedCardNumber: string,
  cardType
): { first: string; second: string; third: string; fourth: string } => {
  const cardNumberStr = formattedCardNumber.replace(/\s/g, "");

  switch (cardType) {
    case "UnionPay":
    case "Visa":
    case "MasterCard":
      return {
        first: cardNumberStr.slice(0, 4),
        second: cardNumberStr.slice(4, 8),
        third: cardNumberStr.slice(8, 12),
        fourth: cardNumberStr.slice(12, 16),
      };

    case "Diners":
      return {
        first: cardNumberStr.slice(0, 4),
        second: cardNumberStr.slice(4, 10),
        third: cardNumberStr.slice(10, 14),
        fourth: "",
      };

    case "AMEX":
      return {
        first: cardNumberStr.slice(0, 4),
        second: cardNumberStr.slice(4, 10),
        third: cardNumberStr.slice(10, 15),
        fourth: "",
      };

    default:
      return {
        first: cardNumberStr.slice(0, 4),
        second: cardNumberStr.slice(4, 8),
        third: cardNumberStr.slice(8, 12),
        fourth: cardNumberStr.slice(12, 16),
      };
  }
};
