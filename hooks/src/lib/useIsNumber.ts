function useIsNumber(value: string) {
  return Number.isInteger(Number(value));
}

export default useIsNumber;
