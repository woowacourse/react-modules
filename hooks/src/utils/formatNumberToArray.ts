export const formatNumberToArray = (value: string, numberFormat: number[]) => {
  let startIndex = 0;
  let lastIndex = 0;
  const formattedArr = [];
  for (const number of numberFormat) {
    if (startIndex >= value.length) {
      break;
    }
    lastIndex = startIndex + number;
    const part = value.slice(startIndex, startIndex + number);
    formattedArr.push(part);
    startIndex += number;
  }

  const isEnd = lastIndex === value.length;
  return { formattedArr, isEnd };
};
