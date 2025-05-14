const parseCardNumber = (input: string, pattern: number[]): string[] => {
  const result: string[] = [];
  let cursor = 0;

  const sanitized = input.replace(/\D/g, "");

  for (const size of pattern) {
    const chunk = sanitized.slice(cursor, cursor + size);
    if (!chunk) break;
    result.push(chunk);
    cursor += size;
  }

  return result;
};

export default parseCardNumber;
