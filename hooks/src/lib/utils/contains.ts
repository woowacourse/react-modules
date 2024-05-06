export function contains<T extends string = string>(
  list: ReadonlyArray<T>,
  value: string
): value is T {
  return list.some((item) => item === value);
}
