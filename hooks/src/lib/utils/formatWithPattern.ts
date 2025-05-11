export const formatWithPattern = (value: string, pattern: number[]): string => {
  let cursor = 0;

  return pattern
    ?.map((len) => {
      const part = value.slice(cursor, cursor + len);
      cursor += len;
      return part;
    })
    .filter(Boolean)
    .join(' ');
};
