export const cardNumberFormatter = (value: string, format: number[]): string => {
  const cleaned = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const parts = [];
  let index = 0;

  for (let i = 0; i < format.length && index < cleaned.length; i++) {
    const partLength = format[i];
    const end = index + partLength > cleaned.length ? cleaned.length : index + partLength;
    parts.push(cleaned.substring(index, end));
    index += partLength;
  }

  return parts.join(" ");
};

export const cardHolderFormatter = (value: string) => {
  return value.toUpperCase();
};
