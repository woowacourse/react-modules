const splitByBlocks = (blockSizes: number[], cardNumber: string) => {
  let result: string[] = [];
  let start = 0;
  for (const size of blockSizes) {
    result.push(cardNumber.slice(start, start + size));
    start += size;
  }
  return result;
};

export const formatCardNumberBlocks = (cardNumber: string) => {
  if (cardNumber.length === 15) return splitByBlocks([4, 6, 5], cardNumber);
  if (cardNumber.length === 14) return splitByBlocks([4, 6, 4], cardNumber);
  return splitByBlocks([4, 4, 4, 4], cardNumber);
};
