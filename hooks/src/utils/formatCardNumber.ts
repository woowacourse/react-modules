export const formatCardNumber = (cardNumber: string, format: number[]) => {
  const result: string[] = [];
  let index = 0;

  for (const length of format) {
    if (index + length >= cardNumber.length) {
      result.push(cardNumber.slice(index));
      break;
    }

    result.push(cardNumber.slice(index, index + length));
    index += length;
  }

  return result;
};
