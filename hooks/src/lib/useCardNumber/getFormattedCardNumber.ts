// [4,4,4,4] => [4,8,12,16]
const getAccumulatedArray = (formatArray: number[]) => {
  return formatArray.reduce((acc, number) => {
    const lastNumber = acc[acc.length - 1] ?? 0;
    acc.push(lastNumber + number);
    return acc;
  }, [] as number[]);
};

const getFormattedCardNumber = (cardNumber: string, formatArray: number[]) => {
  const formatAccumulatedArray = getAccumulatedArray(formatArray);

  return formatAccumulatedArray.reduce((result, number, index) => {
    if (index === 0) {
      result.push(cardNumber.slice(0, number));
      return result;
    }
    result.push(cardNumber.slice(formatAccumulatedArray[index - 1], number));
    return result;
  }, [] as string[]);
};

export default getFormattedCardNumber;
