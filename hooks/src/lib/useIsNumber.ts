function useIsNumber(value: string) {
  return Number.isInteger(Number(value)) && Number(value) >= 0;
}

export default useIsNumber;
