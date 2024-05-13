export const formatNumberToArray = (value: string, numberFormat: number[]) => {
  let startIndex = 0;
  let lastIndex = 0;

  const formattedArr = numberFormat.map((size) => {
    lastIndex = startIndex + size;
    const part = value.substring(startIndex, startIndex + size);
    startIndex += size;
    return part;
  });

  const formattedArrOnlyFilled = formattedArr.filter(
    (numbers) => numbers.length
  );

  const isEnd = lastIndex === value.length;
  return { formattedArr: formattedArrOnlyFilled, isEnd };
};
