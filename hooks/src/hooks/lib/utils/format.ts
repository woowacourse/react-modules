export const cardNumberFormatter = (value: string, format: number[]): string => {
  const cleaned = value.replace(/\s+/g, "");
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

export const expiryDateFormatter = (value: string): string => {
  const cleaned = value.replace(/\//g, "");

  if (cleaned.length <= 2) {
    return cleaned;
  } else {
    const month = cleaned.slice(0, 2);
    const year = cleaned.slice(2);
    return `${month}/${year}`;
  }
};

export const cardHolderFormatter = (value: string) => {
  return value.toUpperCase();
};
