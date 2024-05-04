export const validateFilledValue = (value: string) => {
  return !!value;
};

export const validateNumber = (value: string) => {
  return Number.isInteger(Number(value));
};

// TODO: 이 형태로 모두 사용할 수 있게 리팩토링할 수는 없을까?
export const validateLength = (value: string, length: number) => {
  return value.length === length;
};

export const isValid = <K>(key: K, error: K[] | null): boolean => {
  return error ? !error.includes(key) : true;
};
