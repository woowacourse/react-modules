const formatMap: Record<string, number[]> = {
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  유니온페이: [4, 4, 4, 4],
  Diners: [4, 6, 4],
  AMEX: [4, 6, 5],
};

const formatCardNumber = (cardNumber: string, cardBrand?: string) => {
  if (!cardBrand) {
    return [cardNumber];
  }

  const format = formatMap[cardBrand];

  if (!format) {
    return [cardNumber];
  }

  return format.reduce<{ result: string[]; index: number }>(
    ({ result, index }, len) => ({
      result: [...result, cardNumber.slice(index, index + len)],
      index: index + len,
    }),
    { result: [], index: 0 }
  ).result;
};

export default formatCardNumber;
