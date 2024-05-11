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

  return formatAccumulatedArray.map((number, index) => {
    if (index === 0) {
      return cardNumber.slice(0, number);
    }
    return cardNumber.slice(formatAccumulatedArray[index - 1], number);
  });
};

export default getFormattedCardNumber;
