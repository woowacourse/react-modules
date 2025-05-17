export const formatCardNumber = (input: string, format: number[]): string => {
  const chunks: string[] = [];
  let index = 0;

  for (const length of format) {
    if (index >= input.length) break;
    chunks.push(input.slice(index, index + length));
    index += length;
  }

  return chunks.join(' ');
};
