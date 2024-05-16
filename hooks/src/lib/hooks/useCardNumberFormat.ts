export default function useCardNumberFormat(value: string): string {
  const format = {
    14: [4, 6, 4],
    15: [4, 6, 5],
    16: [4, 4, 4, 4],
  };

  const valueLength = value.length;
  const formatPattern = format[valueLength as keyof typeof format];

  if (!formatPattern) {
    return value;
  }

  const formatted = formatPattern
    .reduce(
      (acc, length, index) => {
        const part = value.slice(acc.startIndex, acc.startIndex + length);
        acc.startIndex += length;
        acc.parts.push(part);
        return acc;
      },
      { startIndex: 0, parts: [] as string[] }
    )
    .parts.join(" ");

  return formatted;
}
