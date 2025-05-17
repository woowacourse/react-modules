export function isInRange(card: string, range: number[]): boolean {
  const prefixLength = range[0].toString().length;
  const prefix = parseInt(card.slice(0, prefixLength));

  if (range.length === 1) {
    return prefix === range[0];
  }

  const [start, end] = range;
  return prefix >= start && prefix <= end;
}
