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

  let startIndex = 0;
  const formattedParts = formatPattern.map((length) => {
    const endIndex = startIndex + length;
    const part = value.slice(startIndex, endIndex);
    startIndex = endIndex;
    return part;
  });

  const formatted = formattedParts.join(" ");

  return formatted;
}
