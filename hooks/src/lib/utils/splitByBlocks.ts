export const splitByBlocks = (blockSizes: number[], cardNumber: string) => {
  let result: string[] = [];
  let start = 0;
  for (const size of blockSizes) {
    result.push(cardNumber.slice(start, start + size));
    start += size;
  }
  return result;
};
